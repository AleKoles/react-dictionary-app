import React from "react";
import "./App.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

function Results(props) {
  if (props.results) {
    console.log(props.results.phonetics);
    return (
      <div className="result  mt-4">
        <h4 className="text-uppercase">{props.results.word}</h4>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}

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
