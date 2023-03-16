import React, { useEffect } from "react";
import FacebookImg from "../Assets/AssetsListAuthors/Facebook.svg";
import InstagramImg from "../Assets/AssetsListAuthors/Instagram.svg";
import LinkedlnImg from "../Assets/AssetsListAuthors/Linkedln.svg";
import TwitterImg from "../Assets/AssetsListAuthors/Twitter.svg";
import ManImg from "../Assets/AssetsListAuthors/ManOne.jpg";
import Author from "../../Data/author.json";

import "./ListAuthors.css";

// useEffect(()=>{
//     if(index == 0){

//     }
// })

export default function OneAuthor() {
  return (
    <>
      {Author.map((user, index) => {
        return (
          <div className="listAuthorsList" key={index}>
            <img
              className="listAuthorsImg"
              src={ManImg}
              width="128px"
              height="128px"
            />
            <p className="listAuthorsName">
              {user.name} {user.surname}
            </p>
            <p className="listAuthorsProfession">{user.profession}</p>
            <div className="listAuthorsSocialContainer">
              <img className="listAuthorsImgLink" src={FacebookImg} />
              <img className="listAuthorsImgLink" src={TwitterImg} />
              <img className="listAuthorsImgLink" src={InstagramImg} />
              <img className="listAuthorsImgLink" src={LinkedlnImg} />
            </div>
          </div>
        );
      })}
    </>
  );
}
