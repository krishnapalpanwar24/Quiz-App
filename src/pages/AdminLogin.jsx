import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
<<<<<<< HEAD
      navigate("/dashboard"); // ✅ GO TO DASHBOARD
=======
      navigate("/dashboard"); 
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card p-4 shadow w-50">
        <h3 className="text-center mb-3">Admin Login</h3>

        <form onSubmit={submitHandler}>
          <input
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-dark w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
