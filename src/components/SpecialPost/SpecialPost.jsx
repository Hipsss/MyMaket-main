import React from "react";
import img from "../Assets/AssetsSpecialPost/people.jpg";

import "./SpecialPost.css";

export default function SpecialPost() {
  return (
    <div className="specialPostContainer">
      <img clasName="specialPostImg" src={img} width="949px" height="705px" />
      <div className="specialPostSquare">
        <h2 className="specialPostH2">{"Why we started"}</h2>
        <p className="specialPostPretext">
          {"It started out as a simple idea and evolved into"}
          <br></br>
          {"our passion"}
        </p>
        <p className="specialPostText">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          }
          <br></br>
          {
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          }
          <br></br>
          {"veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."}
        </p>
        <button className="specialPostButton">{"Discover our story >"}</button>
      </div>
    </div>
  );
}
