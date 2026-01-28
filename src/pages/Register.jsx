import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    // ✅ basic validation
=======
    
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
<<<<<<< HEAD
      // ✅ check if email already exists
=======
      
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
      const snapshot = await getDocs(collection(db, "users"));
      const users = snapshot.docs.map(doc => doc.data());

      const alreadyExists = users.find(
        (u) => u.email === email
      );

      if (alreadyExists) {
        alert("Email already registered");
        setLoading(false);
        return;
      }

<<<<<<< HEAD
      // ✅ add user
=======
      
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
      await addDoc(collection(db, "users"), {
        email,
        password
      });

<<<<<<< HEAD
      alert("Registration successful ✅");
=======
      alert("Registration successful ");
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
      nav("/login");

    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form
        className="card p-4 shadow w-50"
        onSubmit={submit}
      >
        <h3 className="mb-3 text-center">Register</h3>

        <input
          className="form-control mb-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
