from flask import Flask
from flask_cors import CORS
from auth_routes import auth_bp
from profile_routes import profile_bp
from ngo_routes import ngo_bp
import os

app = Flask(__name__)
# Secret used for signing JWTs; override with env var in production
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'change-me-please')
# Allow cross-origin requests from the frontend dev server (and others) for /api/* routes
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.register_blueprint(auth_bp)
app.register_blueprint(profile_bp)
app.register_blueprint(ngo_bp)


if __name__ == "__main__":
    app.run(debug=True)

