import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./App.css";

function Phonetics(props) {
  return (
    <div className="d-flex  bg-white">
      <h5 className="text-muted me-2  bg-white">{props.phonetic.text}</h5>
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="speaker mt-1  bg-white"
      />
    </div>
  );
}

export default Phonetics;
