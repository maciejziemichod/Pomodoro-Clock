import React from "react";
import Timer from "./components/Timer";
import Controllers from "./components/Controllers";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Pomodoro Clock</h1>
      <Controllers />
      <Timer />
      <Buttons />
      <Footer />
    </div>
  );
};

export default App;

// NOTES
// animate the circle based on the time
// https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock
// https://codepen.io/freeCodeCamp/full/XpKrrW
// https://vuejsexamples.com/a-nice-pomodoro-clock-with-vue-js/

// USER STORIES LEFT

/* 
User Story #26: When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This 
should utilize an HTML5 audio tag and have a corresponding id="beep".

User Story #27: The audio element with id="beep" must be 1 second or longer.

User Story #28: The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of 
reset is clicked.
*/
