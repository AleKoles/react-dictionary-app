import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="search d-flex justify-content-between align-items-center">
        <h3 className="text-uppercase pt-2 logo">DICTIONARY</h3>
        <form>
          <input type="text" placeholder="Type your word here" />
          <input type="submit" value="Search" className="button" />
        </form>
      </div>
      <div className="result  mt-4">
        <h4 className="text-uppercase">Word</h4>
        <p>Definittion</p>
      </div>
    </div>
  );
}

export default App;
