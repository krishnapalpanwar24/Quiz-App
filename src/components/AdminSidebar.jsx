import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "240px" }}>
      <h4 className="text-center border-bottom pb-2">Admin Panel</h4>

      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/dashboard/add-quiz">
            Add Quiz
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/dashboard/all-quizes">
            All Quizzes
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
