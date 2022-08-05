import React from "react";
import "./App.css";
import Synonym from "./Synonym";

function Meaning(props) {
  return (
    <div className="meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>
                {definition.definition}
                <br /> <em>{definition.example}</em> <br />
                <Synonym synonym={definition.synonyms} />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
