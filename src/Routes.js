import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import DashBoard from "./components/Dashboard/DashBoard";
import TeamFormPage from "./components/Dashboard/TeamFormPage";
import NotFound from "./components/Login/NotFound";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/teamFormPage" element={<TeamFormPage />} />
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}