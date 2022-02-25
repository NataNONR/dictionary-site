import React from "react";
import AllMeaning from "./AllMeaning";

export default function Result(props) {
  if (props.resultDisplay) {
    return (
      <div className="ResultContent">
        <h2>{props.resultDisplay.word}</h2>
        {props.resultDisplay.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <AllMeaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
