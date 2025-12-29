from flask import Blueprint, request, jsonify
from db import get_db

profile_bp = Blueprint("profile", __name__, url_prefix="/api/profile")

@profile_bp.route("/donor", methods=["POST"])
def create_or_update_donor():
    data = request.json
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        UPDATE donors
        SET name=%s, phone=%s, dob=%s, gender=%s,
            pan_number=%s, aadhaar_number=%s
        WHERE user_id=%s
    """, (
        data["name"],
        data["phone"],
        data.get("dob"),
        data.get("gender"),
        data.get("pan_number"),
        data.get("aadhaar_number"),
        data["user_id"]
    ))

    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "Donor profile updated"})

@profile_bp.route("/ngo", methods=["POST"])
def create_or_update_ngo():
    data = request.json
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        UPDATE ngos
        SET registration_number=%s,
            registration_date=%s,
            category=%s,
            phone=%s,
            city=%s,
            state=%s,
            country=%s,
            mission=%s,
            vision=%s,
            website=%s
        WHERE user_id=%s
    """, (
        data["registration_number"],
        data["registration_date"],
        data["category"],
        data["phone"],
        data["city"],
        data["state"],
        data["country"],
        data.get("mission"),
        data.get("vision"),
        data.get("website"),
        data["user_id"]
    ))

    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "NGO profile updated"})
