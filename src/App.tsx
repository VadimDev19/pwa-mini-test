import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  window.addEventListener("beforeinstallprompt", (ev) => {
    console.log("beforeinstallprompt");
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button">install app</button>
      </header>
    </div>
  );
}

export default App;
