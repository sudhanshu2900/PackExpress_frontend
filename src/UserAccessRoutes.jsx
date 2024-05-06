import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//Entity not login to system

const findRole = () => {
  if (sessionStorage.length !== 0) return sessionStorage.getItem("Role");
};

const UserAccessRoutes = () => {
  return findRole() === "USER" ? <Outlet /> : <Navigate to="/unauth" />;
};

export default UserAccessRoutes;
