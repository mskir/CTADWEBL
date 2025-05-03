import React from "react";
import Carousel from "./Carousel"; 
import Cards from "./Cards";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <div className="message">
        <p>Welcome to NU Student Club Portal!</p>
      </div>

      <div id="hey">
        <Carousel />
      </div>

      <div className="club">
        <h3>National University Student Organizations</h3>
        <p className="text">
          These organizations play a crucial role in enriching the student experience, fostering a sense of community, and providing opportunities for personal and professional growth. From academic and professional groups to cultural and interest-based clubs, each organization contributes uniquely to the diverse tapestry of campus life.
        </p>
      </div>

      <Cards />

      <div className="footer" >
        <p className="message1">© 2024 National University. All rights reserved.</p>
        <p className="name">Gamas, Journey C. 2022-101612</p>
      </div>


    </div>
  );
}

export default Home;
