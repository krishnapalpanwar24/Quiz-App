import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 text-danger">404</h1>
      <h3>Page Not Found</h3>

      <NavLink to="/" className="btn btn-primary mt-3">
        Go Home
      </NavLink>
    </div>
  );
}
