import React, { useState } from "react";
import Result from "./Result";
import ImagesResult from "./ImagesResult";

import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [imagesBank, setImagesBank] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setImagesBank(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001e3fe64a4b5f24b09af0a0178eae6e5e9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
          <h1>What is the word are you looking up?</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type your word"
                  autoFocus={true}
                  onChange={handleKeywordUpdate}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn SearchButton"
                />
              </div>
            </div>
          </form>
          <div className="SearchSample">
            Suggested words: forest, cat, advertisement...
          </div>
        </section>
        <ImagesResult image={imagesBank} />
        <Result resultDisplay={result} />
      </div>
    );
  } else {
    load();
  }
}
