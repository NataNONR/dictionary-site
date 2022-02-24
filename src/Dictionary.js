import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchContent">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type your word"
          autoFocus={true}
          onChange={handleKeywordUpdate}
        />
      </form>
    </div>
  );
}
