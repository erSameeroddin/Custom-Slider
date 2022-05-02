import React, { useState } from "react";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import "./App.css";

const App = () => {
  const [visibility, setVisibility] = useState(true);
  const [value, setValue] = useState(300);
  const [value1, setValue1] = useState(450);
  const [value2, setValue2] = useState(600);
  return (
    <div className="App">
      <div>
        <h4>Basic Slider</h4>
        <br />
        <Slider />
        <Slider2 />
      </div>
      <br />
      <div>
        <h4>Slider With Input Number</h4>
        <br />
        <Slider visibility={visibility} value={value} setValue={setValue} />
        <Slider2
          visibility={visibility}
          value1={value1}
          setValue1={setValue1}
          value2={value2}
          setValue2={setValue2}
        />
      </div>
    </div>
  );
};

export default App;
