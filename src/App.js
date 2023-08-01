import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Default from "./pages/default"
import Clayworks from "./pages/clayworks";
import Digital from "./pages/digital";
import Drawings from "./pages/drawings";
import Paintings from "./pages/paintings";

import Contact from "./pages/contact";
import About from "./pages/about";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/arts/clayworks" element={<Clayworks />} />
        <Route path="/arts/digital" element={<Digital/>} />
        <Route path="/arts/drawings" element={<Drawings/>} />
        <Route path="/arts/paintings" element={<Paintings/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
