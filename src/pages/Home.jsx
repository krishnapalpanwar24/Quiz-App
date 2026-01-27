import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Quiz App</h1>
      <p>Test your knowledge with simple quizzes</p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <NavLink to="/quiz" className="btn btn-primary">
          Start Quiz
        </NavLink>

        <NavLink to="/login" className="btn btn-success">
          User Login
        </NavLink>

        <NavLink to="/admin-login" className="btn btn-danger">
          Admin Login
        </NavLink>
      </div>
    </div>
  );
}
