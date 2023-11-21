import { UserAuth } from "../context/auth";
import { Navigate } from "react-router";

const ProtectCheckout = ({ children }) => {
  const { user } = UserAuth();
  if (user == null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectCheckout;
