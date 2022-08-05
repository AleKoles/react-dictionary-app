import React from "react";
import "./App.css";

function Synonym(props) {
  if (props.synonym) {
    return (
      <span className="synonyms">
        {props.synonym.map(function (synonym, index) {
          return (
            <span className="text-muted" key={index}>
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
