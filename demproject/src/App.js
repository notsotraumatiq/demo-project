import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <body>
        <div>
          <h1 class="MainHeader">What are you main areas of focus?</h1>
        </div>
        <div>
          <h2 class="MainDescription">
            This will help us build a personalized experience for you
          </h2>
        </div>
        <div class="DisplayButtons">
          <button class="EachButtons">Blood Glucose</button>
          <button class="EachButtons">Medication</button>
          <button class="EachButtons">Food Tracking</button>
          <button class="EachButtons">Exercise</button>
          <button class="EachButtons">Weight Management</button>
          <button class="EachButtons">Blood Pressure</button>
          <button class="EachButtons">A1C</button>
        </div>
      </body>
      <footer>
        <div>
          <button class="Disabled">BACK</button>
        </div>
        <div class="DotContainer">
          <div class="Dot active"></div>
          <div class="Dot"></div>
          <div class="Dot"></div>
          <div class="Dot"></div>
          <div class="Dot"></div>
        </div>
        <div>
          <button>DONE</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
