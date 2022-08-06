import React from "react";
import "./App.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

function Results(props) {
  if (props.results) {
    return (
      <div className="result  pt-5 m-0 bg-white">
        <h4 className="text-uppercase  bg-white">{props.results.word}</h4>
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
