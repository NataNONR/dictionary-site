import React from "react";
import Synonyms from "./Synonyms";

export default function AllMeaning(props) {
  console.log(props.meaning);
  return (
    <div className="MeaningResult">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition: </strong>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
