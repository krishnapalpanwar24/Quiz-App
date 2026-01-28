import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="d-flex">
      <AdminSidebar />

      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Admin Dashboard</h4>

          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("adminAuth");
              navigate("/admin-login");
            }}
          >
            Logout
          </button>
        </div>

<<<<<<< HEAD
        {/* LOAD ADD QUIZ / ALL QUIZ */}
=======
        
>>>>>>> 37eeedd0c44772c9447a6a7362a269b95847ba82
        <Outlet />
      </div>
    </div>
  );
}
