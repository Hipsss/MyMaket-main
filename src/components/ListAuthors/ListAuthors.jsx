import React from "react";
import Author from "./Author";

import "./ListAuthors.css";

export default function ListAuthors() {
  return (
    <div className="listAuthorsContainer">
      <h2 className="listAuthorsH2">{"List of Authors"}</h2>
      <div className="listAuthorListContainer">
        <Author /> {/*НАДО УЗНАТЬ КАК НОРМАЛЬНО ДВИНУТЬ ПОСТЫ */}
      </div>
    </div>
  );
}
