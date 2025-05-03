import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import JPCS from "./JPCS";

function GDGoC() {
  return (
    <>
      <div className="message">
        <p>Welcome to NU Student Club Portal!</p>
      </div>

      <div id="carouselExample">
        <img
          src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/481210118_610656485101190_4404520544469758412_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEmrphbBJhc6Ki7W8pLnBgmVwvk7BgLx9pXC-TsGAvH2qXQyKNrahl1nK9sk-FYhletq562D6vd8p-S-I9TiH-0&_nc_ohc=amdvYD90R8YQ7kNvwEtrnx0&_nc_oc=AdkI5dp5qn1hPNkMAr24Cfsv0KSil6sK7Neav1Tpap-JT5AP5dnlSGcg-qQ6fQ_I9tA&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=ebHHvs9l4Sk3z8Ck41X8nQ&oh=00_AfHIyNA01uSOkoJ0nl7SHe74wHsAmw6fdzi4r6tVCawj7g&oe=681BFA22"
          id="clubimage"
          alt="NU Club Banner"
        />
      </div>

      <div className="club11">
        <div className="club1">
          <h3>Google Developer Groups on Campus</h3>
          <p className="text1">
            Google Developer Groups on Campus is a university-based community
            group of Nationalians that is interested in Google developer
            technologies, creating a bridge to address the gaps through
            innovative ideas.
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
          title: "Cyrus Robles",
          text: "Adviser",
          img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/480742865_608627355304103_8502986803488186507_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH-7CrXpd8T2FCiyS3-tP05OzO9KqBS6FA7M70qoFLoUKfw1M-mmjVq9LJVYdRPBQwwhMxEFiFJ2znMn85uoFyW&_nc_ohc=NT6a87w3MTEQ7kNvwEro8DH&_nc_oc=Adnxsuzo2iJvnQi2YSA4COyCZbg5X8cUbmCX8NT4N5z7QocELvVyilgUF__M_VCWhic&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=fwiflgcYHe-COD-J0LFt8w&oh=00_AfHe8ZUjkQMlxDJrbYDI52IzGcNpE_pTI6rNvn8MpsNEqQ&oe=681C3199",
          link: "#"
        },
        {
          title: "Sonya Lee",
          text: "Chapter Lead-Elect",
          img: "https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/481070428_608627388637433_8272241460877592830_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6X9KWCVnsmSaRLRKuCNcxdnoOYheKO1t2eg5iF4o7W_lmOq6UHN4QnDgCe9IwSzycqznJ7rPtMQN4lwjJEmYT&_nc_ohc=YxpETTFn72AQ7kNvwFo2TNu&_nc_oc=AdnBfngKZ-JKjHKcCryruYAJuoO8IXyc3D_Yd-XoEGossV94Gpl5UvVBG6Ihap5LWB4&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=yEgLlWMhkb0zlwKNfzaEag&oh=00_AfEhOQdTA5Nh5Sjfu196wXGieJJSvSqUGSlS0OeK6c10yQ&oe=681C1304",
          link: "/gdgoc"
        },
        {
          title: "Franze Angelei Young",
          text: "President-Elect",
          img: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/481077412_608627325304106_1952811782677319539_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGF3UjczbQEWgAfdToG6B_V65VQTPKhjvDrlVBM8qGO8JJ4f-XHm4ylPSkiaXKdkcbrYf4OHrJYLWs88D0T6Ywy&_nc_ohc=ABNYIzxr-c8Q7kNvwEJYh3z&_nc_oc=AdlW0m0fIeh3tYnGbz2EJxHp3B-WSXAlvORaZwWeF88aFOpwihfMFM5TIoMle_Dmnck&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=XHijTCGeO6e2cBEpYCcOug&oh=00_AfGBLnwuF6YwKMJJSBi3GgxYd1d1_We-_KYyJxRFASrgoA&oe=681C35D1",
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

export default GDGoC;
