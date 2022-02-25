import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="AllPhonetics">
      <a href={props.phonetic.audio} target="_blank">
        🔉
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
