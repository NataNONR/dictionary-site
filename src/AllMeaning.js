import React from "react";
import "./AllMeaning.css";
import Synonyms from "./Synonyms";

export default function AllMeaning(props) {
  console.log(props.meaning);
  return (
    <div className="MeaningResult">
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">- {definition.definition}</div>
            <div className="example">{definition.example}</div>
            <div className="synonym">
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
