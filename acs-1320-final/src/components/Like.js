import React from "react";
import './Like.css'
import { useState } from "react";

function Like() {
  const [like, setLike] = useState(0);
  return (
    <div className="Like">
      <button onClick={() =>setLike(like -1)}>👎</button>
      <div className="likes">{like}</div>
      <button onClick={() =>setLike(like +1)}>👍</button>
    </div>
  );
}

export default Like;