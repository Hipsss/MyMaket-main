import React from "react";
// import BacgroundPng from "./Assets/Overlay.png";
// import ManPng from "./Assets/Man.png";

import "./HomeHero.css";

export default function HomeHero() {
  return (
    <div className="homeHeroInfoCounteiner">
      {/* <img
        className="homeImg"
        src={ManPng}
        alt={BacgroundPng}
        width={"1440px"}
        height="720px"
      /> */}
      <h1 className="homeHeroH1">
        {"Posted on "}
        <b>{"startup"}</b>
      </h1>
      <h2 className="homeHeroH2">
        {"Step-by-step guide to choosing great font pairs"}
      </h2>
      <p className="homeHeroTextAutor">
        {"By "}
        <span className="colorHomeHeroText">{"James West"}</span>
        {"  |  May 23, 2022 "}
      </p>
      <p className="homeHeroText">
        {
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        }
      </p>
      <button className="homeHeroButton">{"Read more >"}</button>
    </div>
  );
}
