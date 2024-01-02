import React from "react";
import { UserAuth } from "../context/auth";
import { Navigate } from "react-router";

const ProtectLogin = ({ children }) => {
  const { admin } = UserAuth();
  if (admin) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectLogin;
