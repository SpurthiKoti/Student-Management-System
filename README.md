# Student-Management-System

## Project Overview
This is a simple Student Management System web application built with Node.js, Express, and vanilla JavaScript on the frontend.  
It allows you to add students, view the student list, and clear all student records.

## Features
- Add new student with name, roll number, and grade
- View the list of all students
- Clear all students from the system

## Technologies Used
- Backend: Node.js, Express, Body-parser, CORS
- Frontend: HTML, CSS, JavaScript (fetch API)

## Getting Started

### Prerequisites
- Node.js and npm installed on your system

### Installation

1. Clone or download the project
2. Navigate to the project directory in the terminal
3. Install dependencies:
npm install
4. Start the server:
npm start
5. Open your browser and visit:
http://localhost:3000


## API Endpoints
- `GET /students` - Get the list of all students
- `POST /students` - Add a new student (expects JSON body with `name`, `roll`, and `grade`)
- `DELETE /students` - Clear all students

## Project Structure
student_management_node/
├── server.js # Backend server code
├── package.json # Project dependencies and scripts
└── public/ # Frontend static files
├── index.html
├── style.css
└── script.js


## Notes
- This project currently stores data in-memory. All student data will be lost when the server restarts.
- You can extend this project by connecting a database like MongoDB or MySQL for persistent storage.

## License
This project is open source and free to use.

---

