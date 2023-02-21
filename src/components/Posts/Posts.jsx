import React from "react";
import housePng from "../Assets/AssetsPosts/house.png";
import UserPost from "./UserPost";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="siteContainer">
      <div className="postContainer">
        <div className="featurePostContainer">
          <h1 className="postFeatureTextH1">{"Featured Post"}</h1>
          <img
            className="houseImg"
            src={housePng}
            width={"669px"}
            height={"352px"}
          />
          <p className="postFeatureTextAutor">
            {"By "}
            <span className="colorPostText">{"John Doe"}</span>
            {"  |  May 23, 2022 "}
          </p>
          <h2 className="postFeatureTextH2">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
            }
          </h2>
          <p className="postFeatureText">
            {
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            }
          </p>
          <button className="postButton">{"Read more >"}</button>
        </div>
        <div className="allPostContainer">
          <div className="allPostHeaderCountainer">
            <h1 className="allPostTextH1">{"All Posts"}</h1>
            <a className="allPostLink" href="#">
              {"View All"}
            </a>
          </div>
          <div className="postsContainer">
            <UserPost />
          </div>
        </div>
      </div>
    </div>
  );
}
