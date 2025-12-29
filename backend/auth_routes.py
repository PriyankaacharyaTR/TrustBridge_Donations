from flask import Blueprint, request, jsonify, current_app
from db import get_db
from psycopg2.extras import RealDictCursor
from jwt_utils import encode_jwt
import datetime

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    role = data.get("role").upper()

    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    cur.execute("""
        SELECT user_id, role
        FROM users
        WHERE email = %s
          AND role = %s
          AND password_hash = crypt(%s, password_hash)
    """, (email, role, password))

    user = cur.fetchone()
    cur.close()
    conn.close()

    if not user:
        return jsonify({"error": "Invalid credentials"}), 401

    # create JWT token containing user_id and role
    # expiry as unix timestamp
    exp_ts = int((datetime.datetime.utcnow() + datetime.timedelta(days=7)).timestamp())
    payload = {
        "user_id": user["user_id"],
        "role": user["role"].lower(),
        "exp": exp_ts
    }
    token = encode_jwt(payload, current_app.config["SECRET_KEY"])

    return jsonify({
        "message": "Login successful",
        "user_id": user["user_id"],
        "role": user["role"].lower(),
        "token": token
    })

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json

    email = data["email"]
    password = data["password"]
    role = data["role"].upper()
    name = data.get("name")
    organization = data.get("organization")

    conn = get_db()
    cur = conn.cursor(cursor_factory=RealDictCursor)

    # create user
    cur.execute("""
        INSERT INTO users (email, password_hash, role)
        VALUES (%s, crypt(%s, gen_salt('bf')), %s)
        RETURNING user_id
    """, (email, password, role))

    user_id = cur.fetchone()["user_id"]

    # role-specific table
    if role == "DONOR":
        cur.execute("""
            INSERT INTO donors (user_id, name, email)
            VALUES (%s, %s, %s)
        """, (user_id, name, email))

    elif role == "NGO":
        cur.execute("""
            INSERT INTO ngos (user_id, name, email)
            VALUES (%s, %s, %s)
        """, (user_id, organization, email))

    conn.commit()
    cur.close()
    conn.close()

    return jsonify({
        "message": "Signup successful",
        "user_id": user_id,
        "role": role.lower()
    }), 201
