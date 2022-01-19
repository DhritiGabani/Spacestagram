import React from "react";
import Heart from "react-animated-heart";

export default function Like({ isLiked, handleclick }) {
  return (
    <div onClick={() => onclick()}>
      <Heart isClick={isLiked} onClick={handleclick} />
    </div>
  );
}
