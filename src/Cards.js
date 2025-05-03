import React from "react";
import "./App.css";

function Cards() {
  return (
    <div className="card-container1">
      <div className="card" style={{ width: "21rem" }}>
        <img
          src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/484165214_956659196581007_3532754166299707628_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHocb_wm30KeGnnilMgf44ghABWNL65VouEAFY0vrlWi_GUAetvgIvG6-CVYUlUHbvQB9JNEEvG1xM0vFydwxrN&_nc_ohc=OMQDsDAd4KAQ7kNvwEBc5fW&_nc_oc=AdnKLl_d92eO5d85QGDv5DTzrppcR00aJfcydtMSAwKjAKXF2PkSZAidw7EIDHu8F9c&_nc_zt=23&_nc_ht=scontent.fcrk1-3.fna&_nc_gid=MflJOX59GM6zE_0bBJWabw&oh=00_AfF-DwV9nymYCvSO05kFeYjpXR910ATob_2zNdoT6kMuLg&oe=681C129A"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">National University Wizards Circle </h5>
          
          <a href="/wizard" className="btn btn-primary">
            More info
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "21rem" }}>
        <img
          src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/453268721_463547109812129_9138109068712373306_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF045qH5Zw5it5qLH832eRuFwf7X6GcQM0XB_tfoZxAzYaBWPxrwxCT3vblimLc-wAge-Mr7WsdSdq6t63uZ42n&_nc_ohc=aRFfWG_8RhwQ7kNvwHJCs4m&_nc_oc=AdnD3GNq3IOKQ1nFgNr3NyJVjHkcdHSz6dTulkRPNrgwu7eo4R-7hl2kVb5fauSH1k8&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=eqojXwXCFaTFM_G4ffnJAQ&oh=00_AfEzdUzHsV3In-98EGcRv4HTeViSyS2tFK-sdaVR0I2zcw&oe=681BFBA0"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Google Developer Groups on Campus</h5>
          
          <a href="/gdgoc" className="btn btn-primary">
            More info
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "21rem" }}>
        <img
          src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/453919655_545022667852831_5798226972604738999_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFr6xFIPw65vgotqnE1ovQJZ3Rx3JHBXa9ndHHckcFdryxY02EmDL1FUXkqppqvRDZAOuGRX_JEyMhqy5PzXled&_nc_ohc=xVZ9ltaQh8YQ7kNvwHt2aVR&_nc_oc=AdlBE6G5DUCIHOHwUdD9yt8WlvOXtAv6PBWfZHCI3RmdSyKjP9VLz4P59Dvjxi-ndjw&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=jvgQtmXnLLJBhM1uwdGscQ&oh=00_AfESt4I4sGO-O8dMEosEYzQOp9NumC0QmCFiAYL-QAaB5w&oe=681C2243"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Junior Philippine Computer Society</h5>
          
          <a href="/jpcs" className="btn btn-primary">
            More info
          </a>
        </div>
      </div>

    </div>
  );
}

export default Cards;
