import React from "react";
import svg from "../Assets/AssetsNavigation/Logo.svg";

import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <div className="navBur">
        <div className="navLogoContainer">
          <img src={svg} alt="{Finsweet" width="140px" height="28.35px" />
        </div>
        <div className="navListContainer">
          <ul className="navList">
            <li className="navListElement">
              <a className="navListLink" href="#">
                {"Home"}
              </a>
            </li>
            <li className="navListElement">
              <a className="navListLink" href="#">
                {"Blog"}
              </a>
            </li>
            <li className="navListElement">
              <a className="navListLink" href="#">
                {"About Us"}
              </a>
            </li>
            <li className="navListElement">
              <a className="navListLink" href="#">
                {"Contact Us"}
              </a>
            </li>
          </ul>
        </div>
        <button className="buttonSubscribe">{"Subscribe"}</button>
      </div>
    </nav>
  );
}
