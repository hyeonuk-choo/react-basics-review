import React, { useState } from "react";
import "./style.css";
import Counter from "./components/Counter.jsx";

export default function App() {
  return (
    <div id="outerBox">
      <Counter />
    </div>
  );
}
