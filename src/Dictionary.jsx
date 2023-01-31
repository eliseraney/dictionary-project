import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for definition of ${keyword}`);
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
