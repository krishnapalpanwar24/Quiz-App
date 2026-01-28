import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Login() {
  let nav = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const snap = await getDocs(collection(db, "users"));
    let users = [];
    snap.forEach(doc => users.push(doc.data()));

    let found = users.find(
      u => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("userloggedIn", true);
      nav("/quiz");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form className="card p-4 w-50" onSubmit={submit}>
        <h3 className="mb-3 text-center">User Login</h3>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">Login</button>

        <NavLink className="text-center mt-3" to="/register">
          New user? Register
        </NavLink>
      </form>
    </div>
  );
}
