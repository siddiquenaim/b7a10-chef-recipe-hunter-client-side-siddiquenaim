import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-130px)]">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
};

export default PrivateRoute;
