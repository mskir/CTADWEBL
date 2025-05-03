import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";

function Wizard() {
  return (
    <>
      <div className="message">
        <p>Welcome to NU Student Club Portal!</p>
      </div>

      <div id="carouselExample">
        <img
          src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/297163289_5480801095313717_4503873680537356588_n.png?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHbhsWR3uVpDorW82t2jZBE50JV3NiZvjnnQlXc2Jm-OWdO74LWsU2eFRPdxQXKwDYSSyRDToybHfUtCKqAMKsx&_nc_ohc=orUh3DI3kdwQ7kNvwFo5Uon&_nc_oc=AdlYbod5gv3bkdKVkVZoiTr2hwND5kV5gw5LELo3nOW4d3fAUQhl2mRz1zdH_6o__Ys&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=qLXvYYwxa2d3P3I5zNEzmg&oh=00_AfHbrwgGdz3WKl-WxvdxzyrVaKyTWggQ6mtpBiHJjo3Fyg&oe=681C44F0"
          id="clubimage"
          alt="NU Club Banner"
        />
      </div>

      <div className="club11">
        <div className="club1">
          <h3>Junior Philippine Computer Society</h3>
          <p className="text1">
          The Junior Philippine Computer Society at the National University of Manila progresses toward empowering individuals and driving innovation. The focus is on cultivating a thriving community where technology and human potential collide. Fostering a growth mindset encourages individuals to believe in their abilities, leading to increased self-esteem and skill enhancement. 
        This incoming school year is an opportunity to empower ourselves and drive progress. Let’s seize this chance to learn, grow, and achieve new heights together. 
          </p>
        </div>
      </div>

      <div className="club111">
        <div className="club1">
          <h3>GDSC Executive Officers</h3>
          <Cards />
        </div>
      </div>

      <div className="footer">
        <p className="message1">© 2024 National University. All rights reserved.</p>
        <p className="name">Gamas, Journey C. 2022-101612</p>
      </div>
    </>
  );
}

function Cards() {
  return (
    <div className="card-container">
      {[
        {
          title: "Ryan Richard Guadana",
          text: "Wizard Circe Adviser",
          img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/299913755_5525831887477304_6166915544488087228_n.png?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGicoUX2ee3hjya6v4mzM0mNuRgdTY39_U25GB1Njf39ZY1-R02bSQ3OuvBDj8magxfL5x4OryAMkffqWkgbSms&_nc_ohc=Rbof9KhkUu0Q7kNvwFNCA39&_nc_oc=AdlrejCHg7tBJti4fPVb6OnQ9fA7yxc5HU7buxiyKVkMEAOEmfcJWFk-Lvqc4XH4xuQ&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=JrOaLzanOLLsuPEJ9WMAig&oh=00_AfGXLTDvqz5EzW4qt7DOE0uYEFKYRSDCiIofXyPcLC_sDg&oe=681C1B89",
          
        },
        {
          title: "Vincent Kyle Caballa",
          text: "Chief Executive Officer",
          img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/300159135_5525831924143967_4522438811264101222_n.png?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFWXLUNGReowVJBeteblU6C9-h1nadQPe336HWdp1A97UyeZ9iSo9MD1j0pZNcmfwc_EjqVz4iNtwc0GUzi8j-W&_nc_ohc=YM7MHlInPvYQ7kNvwFwr3rP&_nc_oc=AdnjHd_q8gJS5iAgDIwZI0Yieuvnzq_D5_rOrQAbOGh3AwxW4Y8ctZfbngQ8Azc7t4Q&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=vEXwRJYdiT0QFUCQ8Qt8nw&oh=00_AfGe_Tlm4Fbz7UU8ZMPc5kQCBD-AcQH-Wm0EoAYY_BQK7g&oe=681C4526",
          link: "/gdgoc"
        },
        {
          title: "Stacy Mae Cuenca",
          text: "Executive Vice President",
          img: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/300081300_5525832100810616_4583589291922722364_n.png?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE6XeTI7kDDjRoWDFvlzTX4ouuKJIn8cIGi64okifxwgVSQU507rxdypKJAh7e9PcK9L3RHkDplsLZnTR35rs0s&_nc_ohc=tAVUmb9B-gcQ7kNvwG8K6Wx&_nc_oc=Adlv9jeKdeZ73Vwmp40sKfkRWKZRsS3MVtXKe16_CKuDwzzeOyJubNZMnoz1G7DlqnY&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=zQkohyZPivbXVHt4-IdUrw&oh=00_AfFwmpxrwVqgRA-Rxx1K6rMYlIFzr6XQyLPgEE0I4fQubQ&oe=681C4295",
          link: "#"
        }
      ].map((card, idx) => (
        <div className="card" key={idx} style={{ width: "21rem" }}>
          <img src={card.img} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wizard;
