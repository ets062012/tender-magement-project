import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from "../../context/AuthContext";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (user.email!="admin@gmail.com") {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;
