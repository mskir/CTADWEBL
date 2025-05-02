import React from 'react';
import "./App.css";
import GDGoC from './GDGoC';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg" id='nav1'>
  <div class="container-fluid">
    <img src='https://national-u.edu.ph/wp-content/uploads/2021/04/nu-logo.png' class="navbar-brand" href="#"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link " href="./App.js">Home</a>
        <a class="nav-link" href="./GDGoC.js">GDGoC</a> 
        <a class="nav-link" href="#">JPCS</a>
        <a class="nav-link" href="#">NU Wizards</a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
