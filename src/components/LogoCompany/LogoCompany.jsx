import React from "react";
import TextImg from "../Assets/AssetsLogoCompany/Featured in.svg";
import Logo1 from "../Assets/AssetsLogoCompany/Logo 1.svg";
import Logo2 from "../Assets/AssetsLogoCompany/Logo 2.svg";
import Logo3 from "../Assets/AssetsLogoCompany/Logo 3.svg";
import Logo4 from "../Assets/AssetsLogoCompany/Logo 4.svg";
import Logo5 from "../Assets/AssetsLogoCompany/Logo 5.svg";

import "./LogoCompany.css";

export default function LogoCompany() {
  return (
    <div className="logoCompanyContainer">
      <img src={TextImg} width="136px" height="52px" />
      <img
        className="LogoImg"
        src={Logo1}
        style={{ marginLeft: "86px", opacity: "0.8" }}
      />
      <img src={Logo2} style={{ marginLeft: "75px", opacity: "0.8" }} />
      <img src={Logo3} style={{ marginLeft: "73px", opacity: "0.8" }} />
      <img src={Logo4} style={{ marginLeft: "73px", opacity: "0.8" }} />
      <img src={Logo5} style={{ marginLeft: "74px", opacity: "0.8" }} />
    </div>
  );
}
