from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
print("server runing")
app = Flask(__name__)

# Allow all origins for CORS, and include methods like OPTIONS and POST
CORS(app, resources={r"/*": {"origins": "*", "methods": "OPTIONS, POST, GET"}})

# File to store user data
FILE_PATH = "server\\users.json"

def load_user_data():
    if os.path.exists(FILE_PATH):
        try:
            with open(FILE_PATH, "r") as file:
                return json.load(file)  # Use json.load() to parse the file content
        except json.JSONDecodeError as e:
            raise e  # If JSON is invalid, raise the error
    return []  # Return an empty list if the file doesn't exist or is empty

# Function to save user data to the file
def save_user_data(data):
    with open(FILE_PATH, "w") as file:
        json.dump(data, file, indent=4)

@app.route('/register', methods=['POST'])
def register():
    # Load existing users data
    users = load_user_data()

    # Get user data from request
    data = request.get_json()
    print(data)

    # Basic validation
    required_fields = ["firstName", "lastName", "email", "password", "gender"]
    if any(field not in data for field in required_fields):
        return jsonify({"error": "Please fill in all required fields"}), 400

    # Check if email already exists
    if any(user["email"] == data["email"] for user in users):
        return jsonify({"error": "This email is already registered"}), 400

   
    users.append(data)

    # Save the updated user data
    save_user_data(users)

    return jsonify({"message": "Registration successful!"}), 201 ,print("register done")


@app.route('/login', methods=['POST'])
def login():
    # Load existing users data
    users = load_user_data()
    print(users)
    # Get user data from request
    data = request.get_json()
    print(data)

    # Basic validation
    required_fields = ["email", "password"]
    if any(field not in data for field in required_fields):
        return jsonify({"error": "Please fill in all required fields"}), 400

    required_user = None
    for user in users:
        if user['email'] == data['email']:
            required_user = user
            break
        
    print(required_user)

    if required_user:
        if required_user['password'] == data['password']:
            return jsonify({"message": "Login Success!"}), 200
        else:
            return jsonify({"message":"Invalid Credentials!"}), 400
    else:
        return jsonify({"message":"User Does Not Exist!"}), 400
    
    
  

if __name__ == '__main__':
    app.run(debug=True)
