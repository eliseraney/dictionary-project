import React from "react";

import Definition from "./Defintion";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Definition definition={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
