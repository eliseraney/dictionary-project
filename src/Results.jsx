import React from "react";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="headword">{props.results.foreach.hwi.hw}</h2>
        <h4 className="pronunciation">{props.results[0].hwi.prs[0].mw}</h4>
        <h5 className="functional-label">{props.results[0].fl}</h5>
        <p>{props.results[0].shortdef[0]}</p>
        <h5 className="functional-label">{props.results[1].fl}</h5>
        <p>{props.results[1].shortdef[0]}</p>
        <h5 className="functional-label">{props.results[2].fl}</h5>
        <p>{props.results[2].shortdef[0]}</p>
      </div>
    );
  } else {
    return null;
  }
}
