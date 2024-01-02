import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";

const ProtectCheckout = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectCheckout;
