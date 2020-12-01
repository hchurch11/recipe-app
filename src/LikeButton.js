import React, { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="LikeButton">
      <button
        type="button"
        className="btn btn-sm"
        onClick={() => setLikes((prevLikes) => prevLikes + 1)}
      >
        {" "}
        ❤️ {likes}
      </button>
    </div>
  );
}
