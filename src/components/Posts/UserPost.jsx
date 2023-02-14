import React from "react";
import Post from "../../Data/userPost.json";
import "./Posts.css";

export default function UserPosts() {
  return (
    <ul>
      {Post.map((user, index) => {
        return (
          <li key={index}>
            <p className="postAllTextAutor">
              {"By "}
              <span className="colorAllPostText">{user.name}</span>
              {"  |  May 23, 2022 "}
            </p>
            <p className="postAllText">{user.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
