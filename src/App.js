import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../src/components/header";
import Home from "../src/pages/home";
import Clayworks from "../src/pages/clayworks";
import Contact from "../src/pages/contact";
import About from "../src/pages/about";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arts/clayworks" element={<Clayworks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
