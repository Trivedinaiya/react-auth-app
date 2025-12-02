import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};


  const handleRegister = (e) => {
    e.preventDefault();

   if (!name || !email || !password) {
  alert("All fields required!");
  return;
}

if (!validateEmail(email)) {
  alert("Please enter a valid email address!");
  return;
}

if (password.length < 6) {
  alert("Password must be at least 6 characters long!");
  return;
}

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary">Register</button>
      </form>
      <p className="mt-2">Already registered? <Link to="/">Login</Link></p>
    </div>
  );
}
