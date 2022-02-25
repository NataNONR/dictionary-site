import React from "react";
import Phonetics from "./Phonetics";
import AllMeaning from "./AllMeaning";

export default function Result(props) {
  if (props.resultDisplay) {
    return (
      <div className="ResultContent">
        <h2>{props.resultDisplay.word}</h2>
        {props.resultDisplay.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
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
