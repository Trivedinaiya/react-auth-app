import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("loggedIn");

  const [name, setName] = useState(user?.name);

  if (!isLoggedIn) {
    navigate("/");
  }

  const handleUpdate = () => {
    user.name = name;
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile Updated!");
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h3>Profile</h3>
      <p><b>Email:</b> {user.email}</p>
      <input className="form-control mb-2" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="btn btn-warning me-2" onClick={handleUpdate}>Update</button>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
    </div>
  );
}
