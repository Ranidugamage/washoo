import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  let location = useLocation();

  console.log(user);
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
