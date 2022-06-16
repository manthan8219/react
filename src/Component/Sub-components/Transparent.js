import React from "react";

import "./Transparent.css";

function Transparent(props) {
  return (
    <div
      className="image"
      style={{ backgroundImage: `url('${props.backgroundImage}')` }}
    ></div>
  );
}

export default Transparent;
