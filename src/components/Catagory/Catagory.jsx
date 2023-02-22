import React from "react";

import "./Catagory.css";
export default function Catagory() {
  return (
    <div className="catagoryContainer">
      <div className="catagoryItem">
        <h3 className="catagoryH3">{"Bussiness"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
      <div className="catagoryItem">
        {" "}
        {/*Добавить цвет  */}
        <h3 className="catagoryH3">{"Startup"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
      <div className="catagoryItem">
        <h3 className="catagoryH3">{"Economy"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
      <div className="catagoryItem">
        <h3 className="catagoryH3">{"Technology"}</h3>
        <p className="catagoryText">
          {"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
        </p>
      </div>
    </div>
  );
}
