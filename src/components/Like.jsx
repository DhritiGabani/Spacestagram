import React from "react";
import Heart from "react-animated-heart";

export default function Like({ isLiked, handleclick }) {
  return <Heart isClick={isLiked} onClick={handleclick} />;
}
