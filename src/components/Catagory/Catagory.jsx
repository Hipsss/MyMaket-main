import React from "react";
import SvgHome from "../Assets/AssetsCatagory/home.svg";
import SvgRocket from "../Assets/AssetsCatagory/rocket.svg";
import SvgDiagram from "../Assets/AssetsCatagory/diagram.svg";
import SvgBussines from "../Assets/AssetsCatagory/business.svg";

import "./Catagory.css";
export default function Catagory() {
  return (
    <div className="catagoryContainer">
      <h2 className="catagoryH2">{"Choose A Catagory"}</h2>
      <div className="catagoryItem">
        {/*Как-то надо подвинуть */}
        <figure className="backgroundSvg" />
        <img className="catagorySvg" src={SvgHome} alt={"img"} />
        <h3 className="catagoryH3">{"Bussiness"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
      <div className="catagoryItem" style={{ background: "#FFD050" }}>
        <figure className="backgroundSvg" style={{ color: "#FBF6EA" }} />
        <img className="catagorySvgRocket" src={SvgRocket} alt={"img"} />
        <h3 className="catagoryH3">{"Startup"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
      <div className="catagoryItem">
        <figure className="backgroundSvg" />
        <img className="catagorySvg" src={SvgDiagram} alt={"img"} />
        <h3 className="catagoryH3">{"Economy"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
      <div className="catagoryItem">
        <figure className="backgroundSvg" />
        <img className="catagorySvg" src={SvgBussines} alt={"img"} />
        <h3 className="catagoryH3">{"Technology"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
    </div>
  );
}
