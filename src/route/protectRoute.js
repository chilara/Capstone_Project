import React from "react";
import { Navigate } from "react-router-dom";

export const AuthenticatedRoute = (props) => {
  if (!props.authenticated) {
    return <Navigate to="/Login" replace />;
  }
  return props.children;
};
