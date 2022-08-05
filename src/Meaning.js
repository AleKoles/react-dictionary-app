import React from "react";
import "./App.css";
import Synonym from "./Synonym";

function Meaning(props) {
  console.log(props.meaning.definitions[0]);
  return (
    <div className="meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br /> <em>{definition.example}</em> <br />
              <Synonym synonym={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
