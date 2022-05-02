import React, { useState } from "react";
import "./styles2.css";
const Slider2 = ({ value1, value2, setValue1, setValue2, visibility }) => {
  const handelChange1 = (e) => {
    if (value2 - e.target.value < 1) {
      return e.target.value;
    }
    setValue1(e.target.value);
  };
  const handelChange2 = (e) => {
    if (e.target.value - value1 < 1) {
      return e.target.value;
    }
    setValue2(e.target.value);
  };
  return (
    <div className="wrapper2">
      {visibility && <span className="range1">{value1}</span>}
      <div className="container2">
        <input
          type="range"
          min='400'
          max='1000'
          value={value1}
          className="slider-2"
          onChange={handelChange1}
        />
        <input
          type="range"
          min='400'
          max='1000'
          value={value2}
          className="slider-2"
          onChange={handelChange2}
        />
      </div>
      {visibility && <span className="range2">{value2}</span>}
    </div>
  );
};

export default Slider2;
