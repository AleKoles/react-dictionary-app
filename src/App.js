import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer className="mt-5  bg-white">
        <a
          target="_blank"
          className="link bg-white"
          rel="noreferrer"
          href="https://github.com/AleKoles/react-dictionary-app"
        >
          <img src="/images/git.svg" alt="GitHub" className="git" /> Source Code
        </a>
      </footer>
    </div>
  );
}

export default App;
