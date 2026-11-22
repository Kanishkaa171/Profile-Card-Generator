# Profile Card Generator

A simple and interactive web application that generates personalized user profile cards using user-provided information and profile image URLs.

## Features

- Enter your full name and bio.
- Add a profile image using an image URL.
- Generate a profile card dynamically.
- Flask backend integration using REST API.
- Responsive and user-friendly interface.
- Input validation and error handling.

## Tech Stack

**Frontend:**
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

**Backend:**
- Python
- Flask
- Flask-CORS

**Communication:** Fetch API (JSON)

## Project Structure

```text
ProfileCardGenerator/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Profile-Card-Generator.git
```

### 2. Navigate to the project

```bash
cd Profile-Card-Generator
```

### 3. Set up the backend

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:

**Windows:**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 4. Run the Flask server

```bash
python app.py
```

The backend will run at:

`http://127.0.0.1:5000`

### 5. Run the frontend

Open the `frontend` folder in VS Code and launch `index.html` using the Live Server extension.

## API Endpoint

**POST** `/generate-profile`

Accepts JSON data:

```json
{
  "name": "John Doe",
  "bio": "Web Developer",
  "image": "https://example.com/profile.jpg"
}
```

Returns a JSON response containing the generated profile information.

## Author

Developed as a web development project using Flask and JavaScript.