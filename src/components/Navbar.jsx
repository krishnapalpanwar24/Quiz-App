import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  let user = localStorage.getItem("userloggedIn");
  let nav = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">
        QuizApp
      </NavLink>

      <div className="navbar-nav ms-auto gap-3">
        <NavLink className="nav-link" to="/quiz">
          Quiz
        </NavLink>

        {user ? (
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              localStorage.removeItem("userloggedIn");
              nav("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <NavLink className="btn btn-outline-light" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
