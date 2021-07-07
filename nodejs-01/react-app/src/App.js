import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = ({ unleash }) => {
  const [toggles, setData] = useState({
    testFlagLogo: unleash.isEnabled("test-flag"),
  });

  useEffect(() => {
    unleash.on("update", () => {
      setData({ testFlagLogo: unleash.isEnabled("test-flag") });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {toggles.testFlagLogo ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
