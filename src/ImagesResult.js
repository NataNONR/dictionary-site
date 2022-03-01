import React from "react";
import "./ImagesResult.css";

export default function ImagesResult(props) {
  if (props.image) {
    return (
      <section className="ImagesGroup">
        <div className="row">
          {props.image.map(function (eachImage, index) {
            return (
              <div className="col-3" key={index}>
                <a
                  href={eachImage.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="img-fluid" src={eachImage.src.tiny} />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
