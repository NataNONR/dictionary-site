import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordUpdate(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="SearchContent">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type your word"
              autoFocus={true}
              onChange={handleKeywordUpdate}
            />
          </form>
          <div className="SearchSample">
            Suggested words: forest, cat, advertisement...
          </div>
        </section>
        <Result resultDisplay={result} />
      </div>
    );
  } else {
    load();
  }
}
