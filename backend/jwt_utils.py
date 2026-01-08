import json
import base64
import hmac
import hashlib
import time
from typing import Dict, Any


def _b64url_encode(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode("utf-8")


def _b64url_decode(input_str: str) -> bytes:
    padding = '=' * (-len(input_str) % 4)
    return base64.urlsafe_b64decode(input_str + padding)


def encode_jwt(payload: Dict[str, Any], secret: str) -> str:
    header = {"alg": "HS256", "typ": "JWT"}
    header_b = _b64url_encode(json.dumps(header, separators=(',', ':')).encode('utf-8'))
    payload_b = _b64url_encode(json.dumps(payload, separators=(',', ':')).encode('utf-8'))
    signing_input = f"{header_b}.{payload_b}".encode('utf-8')
    sig = hmac.new(secret.encode('utf-8'), signing_input, hashlib.sha256).digest()
    sig_b = _b64url_encode(sig)
    return f"{header_b}.{payload_b}.{sig_b}"


def decode_jwt(token: str, secret: str) -> Dict[str, Any]:
    try:
        header_b, payload_b, sig_b = token.split('.')
    except ValueError:
        raise ValueError('Invalid token format')

    signing_input = f"{header_b}.{payload_b}".encode('utf-8')
    expected_sig = hmac.new(secret.encode('utf-8'), signing_input, hashlib.sha256).digest()
    try:
        sig = _b64url_decode(sig_b)
    except Exception:
        raise ValueError('Invalid signature encoding')

    if not hmac.compare_digest(expected_sig, sig):
        raise ValueError('Invalid signature')

    try:
        payload_json = _b64url_decode(payload_b).decode('utf-8')
        payload = json.loads(payload_json)
    except Exception:
        raise ValueError('Invalid payload')

    # Optional expiry check
    exp = payload.get('exp')
    if exp is not None:
        now = int(time.time())
        if now > int(exp):
            raise ValueError('Token expired')

    return payload
