import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import SignupPage from "../screens/SignupPage";
import LoginPage from "../screens/LoginPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
