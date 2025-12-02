📌 React User Authentication App

A simple, clean, and functional React Authentication System built using React + Vite, React Router, Bootstrap, and LocalStorage.
This project includes User Registration, Login, Profile View, Edit Profile, and Logout — perfect for internship or junior frontend role evaluation.

🚀 Features

🔐 Authentication

User Registration (Name, Email, Password)
User Login (LocalStorage verification)
Logout functionality

👤 Profile Management

View user details
Edit and update name
Auto redirect if not logged in

⚙️ Validation

Valid email format required
Password must be at least 6 characters
All fields required
Wrong login → shows error

💾 Data Storage

User info stored in localStorage
Logged-in state stored in localStorage

🛠️ Technologies Used

React (Vite)
React Router DOM
Bootstrap
JavaScript (ES6+)
LocalStorage API

📂 Project Folder Structure
react-auth-app/
│── public/
│── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profile.jsx
│   ├── App.jsx
│   └── main.jsx
│── index.html
│── package.json
│── README.md

⚙️ How to Run the Project
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm run dev

3️⃣ Open in browser
Vite will show something like:
http://localhost:5173/
Open it in your browser.

🔧 How It Works

Registration
User enters name, email, and password
Email is validated with regex
Password must be 6+ characters
User is saved to localStorage
Redirects to login page
Login
Credentials are matched with localStorage
On success → user goes to Profile
On failure → error alert
Profile Page
Shows user email
Name is editable
Updating name saves changes in localStorage
Logout removes login state

🧪 Error Handling

The app handles:

✔ Empty fields
✔ Invalid email format
✔ Password too short
✔ Wrong login credentials
✔ Direct access to /profile without login

🎨 UI & Styling

The project uses Bootstrap for simple and clean UI:
Buttons
Form controls
Layout spacing (mt-5, mb-2, etc.)

📌 Why This Project is Good for Recruiters

Clean and simple code
Fully working authentication system
Shows knowledge of React Hooks
Demonstrates routing & navigation
Uses localStorage for persistent auth
Well-structured folder organization
Professional README

✨ Author

Naiya Trivedi
Full Stack Developer | React Developer
🌐 GitHub: https://github.com/Trivedinaiya
