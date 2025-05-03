import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import Navbar from "./Navbar";
import GDGoC from "./GDGoC";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import JPCS from "./JPCS";
import Wizard from "./Wizard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />             
        <Route path="/home" element={<Home />} />
        <Route path="/gdgoc" element={<GDGoC />} />
        <Route path="/jpcs" element={<JPCS />} />
        <Route path="/wizard" element={<Wizard />} />
      </Routes>
    </Router>
  );
}

export default App;
