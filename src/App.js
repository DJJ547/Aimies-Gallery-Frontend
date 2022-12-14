import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Arts from "./pages/Arts";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}
