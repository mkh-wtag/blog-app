import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "components/Login";
import Dashboard from "components/Dashboard";
import Home from "components/Home";
import NotFound from "components/NotFound";
import Profile from "components/Profile";
import Register from "components/Register";
import EditProfile from "components/EditProfile";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path=":name" element={<Profile />} />
      <Route path="edit-profile/:name" element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
