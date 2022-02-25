import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Result resultDisplay={result} />
    </div>
  );
}
