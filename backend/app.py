from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Flask application
app = Flask(__name__)

# Enable CORS
CORS(app)


# Home route
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Welcome to User Profile Card Generator API!",
        "status": "Backend is running"
    })


# Generate Profile API
@app.route('/generate-profile', methods=['POST'])
def generate_profile():

    # Receive JSON data from frontend
    data = request.get_json(silent=True)

    # Check if data is received
    if not data:
        return jsonify({
            "success": False,
            "message": "No data received!"
        }), 400

    # Extract user details
    name = data.get('name')
    bio = data.get('bio')
    image = data.get('image')

    # Validate input fields
    if not name or not bio or not image:
        return jsonify({
            "success": False,
            "message": "All fields are required!"
        }), 400

    # Process profile information
    profile = {
        "name": name,
        "bio": bio,
        "image": image
    }

    # Send response to frontend
    return jsonify({
        "success": True,
        "message": "Profile generated successfully!",
        "profile": profile
    }), 200


# Run Flask server
if __name__ == '__main__':
    app.run(debug=True, port=5000)