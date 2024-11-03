import { useState } from "react";
import Navb from "./components/Navbar/Navb";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import UserRoute from "./routes/UserRoute";
import LoginSignup from "./components/LoginSignup";
import PayRent from "./pages/PayRent";
import PostProperty from "./pages/PostProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<UserRoute />} />
          <Route path="/LoginSignUp" element={<LoginSignup />} />
          <Route path="/PayRent" element={<PayRent />} />
          <Route path="/PostProperty" element={<PostProperty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
