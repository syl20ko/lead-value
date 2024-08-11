
import React from "react";

function HeaderTitle() {
  return (
<>    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-6">
          <img
            src="/lead-value/logo-sylvain-caron.png"
            className="logoSylvain"
            alt="Sylvain Caron"
          />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <h1 className="title" style={{margin : "0px"}}>
            <span style={{ color: "#4C86F9", fontWeight: "bold" }}>L</span>
            <span style={{ color: "#49A84C", fontWeight: "bold" }}>e</span>
            <span style={{ color: "#F6BB02", fontWeight: "bold" }}>a</span>
            <span style={{ color: "#E1432E", fontWeight: "bold" }}>d</span>
            <span style={{ color: "black" }}> Value</span>
          </h1>
        </div>
      </div>
    </div>
          <div className="container mt-3">
          <div className="row">
            <div className="col-12 mt-3 text-center">
              <p className="slogan">
                Calculez le CPL maximal que vous pouvez vous permettre de payer sur
                <br /> Google Ads {"     "}
                <img
                  src="/lead-value/adslogo.png"
                  className="logoAds"
                  alt="google ads"
                />
              </p>
            </div>
          </div>
        </div></>
  );
}

export default HeaderTitle;
