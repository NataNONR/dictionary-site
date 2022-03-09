import React from "react";
import Phonetics from "./Phonetics";
import AllMeaning from "./AllMeaning";
import "./Result.css";

export default function Result(props) {
  if (props.resultDisplay) {
    return (
      <div className="ResultContent">
        <section>
          <h2>{props.resultDisplay.word}</h2>
          {props.resultDisplay.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.resultDisplay.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <AllMeaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
