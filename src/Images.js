import React from "react";
import "./App.css";

function Images(props) {
  console.log(props.image);
  if (props.image) {
    return (
      <div className="images bg-white m-0">
        <div className="row">
          {props.image.map(function (pic, index) {
            return (
              <div key={index} className="col-4">
                <a href={pic.src.landscape} target="_blank" rel="noreferrer">
                  <img
                    src={pic.src.landscape}
                    alt="Illustration"
                    className="img-fluid image"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Images;
