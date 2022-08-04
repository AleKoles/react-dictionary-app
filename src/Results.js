import React from "react";
import "./App.css";
import Meaning from "./Meaning";

function Results(props) {
  if (props.results) {
    console.log(props.results.meanings[0].definitions[0].definition);
    return (
      <div className="result  mt-4">
        <h4 className="text-uppercase">{props.results.word}</h4>
        <h5 className="text-muted">{props.results.phonetic}</h5>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
