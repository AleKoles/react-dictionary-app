import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./App.css";

function Dictionary() {
  const [word, setWord] = useState("dictionary");
  const [results, setResults] = useState(null);
  const [image, setImage] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setImage(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000015447da409bef4004baa0abe471255411";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: header }).then(handlePexelsResponse);
  }
  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div>
      <div className="search d-flex justify-content-between align-items-center bg-white">
        <a href="/" className="text-decoration-none  bg-white">
          <h3 className="text-uppercase pt-2 logo  bg-white">DICTIONARY</h3>
        </a>
        <form onSubmit={search} className="bg-white">
          <input
            type="search"
            placeholder="Type your word here"
            onChange={updateWord}
          />
          <input type="submit" value="Search" className="button" />
        </form>
      </div>
      <Results results={results} />
      <Images image={image} />
    </div>
  );
}

export default Dictionary;
