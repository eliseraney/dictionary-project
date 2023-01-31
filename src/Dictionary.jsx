import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleSearch(event) {
    event.preventDefault();

    const apiKey = `4b5921d9-1756-47f5-ad62-611d835b40f4`;
    const apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
