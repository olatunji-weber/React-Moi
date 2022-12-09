import React from "react";
import ReactDOM from "react-dom";

let num1 = 50;
let num2 = 100;
let sum = num1 + num2;

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamos</li>
    </ul>
    <hr />
    <h1>The Sum of the Numbers is: {sum}</h1>
  </div>,
  document.getElementById("root")
);
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
