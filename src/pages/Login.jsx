import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user registered!");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("loggedIn", true);
      alert("Login Successful!");
      navigate("/profile");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-success">Login</button>
      </form>
      <p className="mt-2">New user? <Link to="/register">Register</Link></p>
    </div>
  );
}
