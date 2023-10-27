import React from "react";
import { UserAuth } from "../context/auth";
import { Navigate } from "react-router";

const ProtectLogin = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectLogin;
