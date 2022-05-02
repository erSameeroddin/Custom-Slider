import React, { useState } from "react";
import "./styles.css";
const Slider = ({ value, setValue, visibility }) => {
  return (
    <div class="container">
      <input
        type="range"
        className="my-slider"
        min='200'
        max='400'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        oninput="slider()"
      />
      {visibility ? <div id="slider-value">{value}</div> : null}
    </div>
  );
};

export default Slider;
