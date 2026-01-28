import { Navigate } from "react-router-dom";

export default function ProtectedUserRoute({ children }) {
  let user = localStorage.getItem("userloggedIn");
  return user ? children : <Navigate to="/login" />;
}
