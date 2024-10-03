import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/formularios/LoginPage";
import Pizza from "./pages/pizza/Pizza";
import Profile from "./pages/profile/Profile";
import RegisterPage from "./pages/formularios/RegisterPage";
import NotFound from "./pages/notfound/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizzas/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
