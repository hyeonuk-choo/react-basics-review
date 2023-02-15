import React, { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <input
        value={count}
        type="number"
        step="100"
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      ></input>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      {/* <div class="count">{count}</div> */}
    </>
  );
};

export default Counter;
