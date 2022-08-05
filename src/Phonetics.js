import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./App.css";

function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="d-flex">
      <h5 className="text-muted me-2">{props.phonetic.text}</h5>
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="speaker mt-1"
      />
    </div>
  );
}

export default Phonetics;
