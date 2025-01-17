from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)  # Define the Flask app
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow frontend origin

@app.route('/login', methods=['POST'])
def login():
    users = [
        {"email": "test@example.com", "password": "123456"},
        {"email": "abc@abc.com", "password": "123456"},
        {"email": "user@example.com", "password": "password123"}
    ]
    data = request.get_json()  # Safely parse JSON
    if not data:
        return jsonify({"error": "Invalid request format"}), 400

    email = data.get("email")
    password = data.get("password")

    for user in users:
        if user["email"] == email and user["password"] == password:
            return jsonify({"message": "Login successful"}), 200

    return jsonify({"error": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True, port=5000)
