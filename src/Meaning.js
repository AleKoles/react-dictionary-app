import React from "react";
import "./App.css";
import Synonym from "./Synonym";

function Meaning(props) {
  return (
    <div className="meaning  bg-white">
      <h5 className="bg-white">{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul className="bg-white">
              <li className=" bg-white">
                {definition.definition}
                <br /> <em className="bg-white">{definition.example}</em> <br />
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
