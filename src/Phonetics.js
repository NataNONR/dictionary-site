import React from "react";

export default function Phonetics(props) {
  return (
    <div className="AllPhonetics">
      <a href={props.phonetic.audio} target="_blank">
        🔉
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
