import React from "react";

import "./JoinTeam.css";

export default function JoinTeam() {
  return (
    <div className="joinTeamContainer">
      <h2 className="joinTeamH2">
        {"Join our team to be a part of our story"}
      </h2>
      <p className="joinTeamText">
        {"Lorem ipsum dolor sit amet, consectetur adipiscing"}
        <br></br>
        {"elit, sed do eiusmod tempor incididunt."}
      </p>
      <button className="joinTeamButton">{"Join Now"}</button>
    </div>
  );
}
