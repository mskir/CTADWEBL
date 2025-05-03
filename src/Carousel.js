import React from "react";
import './App.css';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" style={{ width: "1350px"}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.6435-9/117673663_3348490175211497_2977532630238539534_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFWRDCXJABhYBQ2iOm2aGoBalvtyEeyaqVqW-3IR7JqpT-NOSaS4XvRtUD4f3x4l3JkxK4Iuxyer0y6SID7Kjhq&_nc_ohc=9x0dGJyoRQEQ7kNvwEBBs57&_nc_oc=Adk7NbCifQRdLF651lgj6eti9gQnpLNdFEgCHZIcbMgpWVOkAb7NOqz9Xfxqohq6V_A&_nc_zt=23&_nc_ht=scontent.fcrk1-5.fna&_nc_gid=2s6u4_6jE-eKZNMdRACgZg&oh=00_AfHW1Q_iWZeKC2aToHYJnqolPO9m_JPO0ZmwpkEIFpjF7A&oe=683D9652" className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }}/>
        </div>
        <div className="carousel-item">
          <img src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/486159020_28689578744020219_338430601839432136_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeE9oZmQPsM8h7qhLOTfKeKHF5DSyeR2DiYXkNLJ5HYOJrwHx-PqKMiXaqWIqZUFEntvOK2-QQenFYscGzg2wp7O&_nc_ohc=bbDhJD4KxycQ7kNvwH0TQhy&_nc_oc=AdmorUwKBl3R18-9Jg7vIYXq1qtqp6uzqjzotwvzgedI8aKbYItPHryAS0CqjwA5Hio&_nc_zt=23&_nc_ht=scontent.fcrk1-1.fna&_nc_gid=2h5yPsc3qslyep3uYkKPpw&oh=00_AfEFNAjqZujA_R8a9zhtuDvqR0_ALBRqDC9m3guR8KADrw&oe=681BFA3F" className="d-block w-100" alt="..." style={{ height: "400px" }}/>
        </div>
        <div className="carousel-item">
          <img src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/299315126_107258198761800_5773236591014879063_n.png?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGIZaZVHospUXNq0MpySL7Vc8RYFY_gR3VzxFgVj-BHddBcjOOQ-857F_GMLYZd32kx1iA2WwsB_V1kFYy5om2i&_nc_ohc=fedRshwNfcMQ7kNvwE6JfHS&_nc_oc=AdmV4JTZbxghMGShqq4B3sWGlmTSY6Id8ADiuNWSPv3njOX1xk7TN9hg9_TZcSSFjMU&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=HL3LP5zoYp16Dl4EcZglEw&oh=00_AfHwJuCjOZYDNkJonD_mYysmD0-Si8XxEu4YFbFC0tFnTA&oe=681C11FE" className="d-block w-100" alt="..." style={{ height: "400px", objectFit: "cover" }} />
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
