import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import GDGoC from "./GDGoC";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/src/Home.js" element={<Home />}/>
        <Route path="/src/GDGoC.js" element={<GDGoC />}/>
      </Routes>
      {/* <div class="message">
        <p>Welcome to NU Student club Portal!</p>
      </div>
      <div id="hey">
      <Carousel />
      </div>

      <h3> National University Student Organizations </h3>
      <p className="text">These organizations play a crucial role in enriching the student experience, fostering a sense of community, and providing opportunities for personal and professional growth. From academic and professional groups to cultural and interest-based clubs, each organization contributes uniquely to the diverse tapestry of campus life.</p> */}

    </>
  );
}

export default App;
