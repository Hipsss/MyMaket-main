import React from "react";
import housePng from "../Assets/AssetsPosts/house.png";
import UserPost from "./UserPost";
import "./Posts.css";

// const post = userPost.map((user, id) => {
//     <div key={id}>
//       <p className="postAllTextAutor">
//         {"By "}
//         <span className="colorAllPostText">{user.name + user.surname}</span>
//         {"  |  May 23, 2022 "}
//       </p>
//       <p className="postAllText">{user.description}</p>
//     </div>
// });

// let postName = userPost.map((author) => (
//   <userPost name={author.name} id={author.id} />
// ));

// ptivet sadasdasd rewrw
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
          <UserPost />
        </div>
      </div>
    </div>
  );
}
