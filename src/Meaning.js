import React from "react";
import "./App.css";

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
              <br /> <em>{definition.example}</em>
            </p>
          </div>
        );
      })}

      <p>
        <em>{props.meaning.definitions[0].example}</em>
      </p>
    </div>
  );
}

export default Meaning;
