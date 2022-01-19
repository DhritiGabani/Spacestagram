import React, { useState } from "react";
import Like from "./Like";

export default function Card({ id, url, title, desc, currentData }) {
  const list = JSON.stringify(localStorage.getItem("likedCards"));
  const flag = list.indexOf(id);

  const [isLiked, setLiked] = useState(flag === -1 ? false : true);

  const handleOnClick = () => {
    const cardList = JSON.parse(localStorage.getItem("likedCards"));
    if (!isLiked) {
      localStorage.setItem("likedCards", JSON.stringify([...cardList, id]));
    } else {
      cardList.splice(cardList.indexOf(id), 1);
      localStorage.setItem("likedCards", JSON.stringify(cardList));
    }
    console.log(localStorage.getItem("likedCards"));

    setLiked((prevState) => !prevState);
  };

  return (
    <div className="card-wrapper">
      <div className="card-img-wrapper">
        <img src={url} alt={title} className="card-img" />
      </div>
      <div className="card-title-wrapper">
        <p class="card-title">{title}</p>
        <Like isLiked={isLiked} handleclick={handleOnClick} />
      </div>
      <p className="date"> Date: {currentData}</p>
      <p className="description">{desc}</p>
    </div>
  );
}
