import React from "react";
import './App.css';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" style={{ width: "1300px"}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://essal.dz/wp-content/uploads/2023/12/gdsc-post-cover.png" className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }}/>
        </div>
        <div className="carousel-item">
          <img src="https://philippinecomputersociety.org/wp-content/uploads/2017/06/JPCSlogo-1024x392.jpg" className="d-block w-100" alt="..." style={{ height: "400px" }}/>
        </div>
        <div className="carousel-item">
          <img src="Class_1.png" className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel; 
