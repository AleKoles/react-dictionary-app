import React from "react";
import "./App.css";

function Synonym(props) {
  if (props.synonym) {
    return (
      <span className="synonyms bg-white">
        {props.synonym.map(function (synonym, index) {
          return (
            <span className="text-muted bg-white" key={index}>
              {synonym}{" "}
            </span>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
}

export default Synonym;
