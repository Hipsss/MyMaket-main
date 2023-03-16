import React from "react";

import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonialsContainer">
      <div className="testimonialsContainerLeft">
        <h2 className="testimonialsH2">{"Testimonials"}</h2>
        <p className="testimonialsPretext"></p>
        <p className="testimonialsText"></p>
      </div>
      <div className="testimonialsContainerRight"></div>
    </div>
  );
}
