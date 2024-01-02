import React from "react";
import { UserAuth } from "../context/auth";
import { Navigate } from "react-router-dom";

const ProtectedDashboard = ({ children }) => {
  const { admin } = UserAuth();
  if (!admin) {
    return <Navigate to="/adminlogin" />;
  }
  return children;
};

export default ProtectedDashboard;
