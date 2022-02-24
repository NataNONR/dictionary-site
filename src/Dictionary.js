import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("Searching...");
  }

  return (
    <div className="SearchContent">
      <form onSubmit={search}>
        <input type="search" placeholder="Type your word" autoFocus={true} />
      </form>
    </div>
  );
}
