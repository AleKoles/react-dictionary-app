import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";

function Dictionary() {
  const [word, setWord] = useState("dictionary");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div>
      <div className="search d-flex justify-content-between align-items-center">
        <a href="/" className="text-decoration-none">
          <h3 className="text-uppercase pt-2 logo ">DICTIONARY</h3>
        </a>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Type your word here"
            onChange={updateWord}
          />
          <input type="submit" value="Search" className="button" />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;
