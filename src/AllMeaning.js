import React from "react";

export default function AllMeaning(props) {
  console.log(props.meaning);
  return (
    <div className="MeaningResult">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
