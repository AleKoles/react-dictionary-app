import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function handleResponse(response) {
  console.log(response);
}

function Dictionary() {
  const [word, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateWord(event) {
    event.preventDefault();
    setWord(event.target.value);
  }
  return (
    <div>
      <div className="search d-flex justify-content-between align-items-center">
        <h3 className="text-uppercase pt-2 logo">DICTIONARY</h3>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Type your word here"
            onChange={updateWord}
          />
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

export default Dictionary;
