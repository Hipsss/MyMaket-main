import React from "react";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <figure className="yellowFigure"></figure>
      <figure className="purpleFigure"></figure>
      <div className="aboutUsContainer">
        <div className="aboutUs">
          <h2 className="aboutUsH2">{"About Us"}</h2>
          <p className="aboutUsPretext">
            {"We are a community of"}
            <br></br>
            {"content writers who share their learnings"}
          </p>
          <p className="aboutUsText">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          </p>
          <a href="#" className="aboutUsLink">
            {"Read More >"}
          </a>
        </div>
        <div className="ourMision">
          <h2 className="ourMisionH2">{"Our Mision"}</h2>
          <p className="ourMisionPretext">
            {"Creating valuable content for creatives all around the world"}
          </p>
          <p className="ourMisionText">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          </p>
        </div>
      </div>
    </>
  );
}
