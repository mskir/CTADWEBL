import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";

function JPCS() {
  return (
    <>
      <div className="message">
        <p>Welcome to NU Student Club Portal!</p>
      </div>

      <div id="carouselExample">
        <img
          src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/454195449_545022787852819_1831499989253481580_n.png?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHSyNnZycvhphDilpjTEuq6q3phuGDz0DeremG4YPPQN751U3zRMd6rkPuT-rX2vOqkjhnODU32A0hJ3zZKA9g0&_nc_ohc=1GtWcIPeEygQ7kNvwEUi7ok&_nc_oc=Adli-FjEEGnBlLEYZwic7MqmS2QzTvbhg0tdmId6QziaMzoagVPD7bLeGF_xV-rJizo&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=XlovIdcaFRLnG4do5BEljQ&oh=00_AfFID2S-yjgucf_KPhU9iBQB0vgwZe97h2cAg29X7JLMjw&oe=681C0D79"
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
          title: "Engr. Rogel M. Labanan",
          text: "Adviser",
          img: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/482021693_695181016170328_7652465833710637155_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFw_6rnBETCphtpHjJLvwCfxJmk5yorP5jEmaTnKis_mDwgK7ESnltqsjT9uGoQN5MjiTmySK1OWRIp8bq_qr58&_nc_ohc=oKx23HDpJPEQ7kNvwHe4ewM&_nc_oc=AdlIXWEwenDBAxmw2I1uOnoTmXwnydG_Ojs363qHDltBTfwT8lQfp3rxXV9-bmVotcY&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=fjFt0tE61kH-svoDBFh1wg&oh=00_AfGbEjNRgHa--qpTkfYdOkMf9wnCu3b-T8bu-jAtwTRvnw&oe=681C28A3",
          link: "#"
        },
        {
          title: "Syljie A. Cañete",
          text: "President",
          img: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/482092487_695181006170329_1290252084337906224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHR1IR62EC_hQMV2VZi0YxE4eqZWiit79_h6plaKK3v3-BfId_c5TRotjOrjV4WSDfYsd_ifrrI_KmeziaNDjaf&_nc_ohc=ZTgLaiEXPrgQ7kNvwEEHd4q&_nc_oc=AdlSRk803SMfmEGSVKoxv0RV-30QbL_v-SKcwtcZu5SHML-Khu0eE62BM2Yoh-fzZm0&_nc_zt=23&_nc_ht=scontent.fcrk1-2.fna&_nc_gid=qutHdhnzIeCMOYJScGSDTQ&oh=00_AfHUm2t5VBVBAM_fA_LLx67IKtyhelgTKI9JweLBaDa2RQ&oe=681C1F6C",
          link: "/gdgoc"
        },
        {
          title: "Alaiza D. Era",
          text: "Junior President",
          img: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/482141433_695180899503673_8209702349751017183_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWmC8OpfsXW8dgzzsMOvqUdF0qgoIvghV0XSqCgi-CFT488XSGkP0ApM6iDnv9W6MECW1WQSH2LMkp8ZB3Goz9&_nc_ohc=lJCvECm2tOoQ7kNvwHqLG50&_nc_oc=Adn4HXm4xxssOFhAlmp-845T5YVqBlE4yYsrLsouj5XXQIYWA9Vtcb9yreAIvMTMCo4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=RSDUfLU4NGqEPXJEcayt8g&oh=00_AfE164Yafbu6DtJfETK4OIO6wfDeZC6CosEvNkfJvgNszg&oe=681C2EFC",
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

export default JPCS;
