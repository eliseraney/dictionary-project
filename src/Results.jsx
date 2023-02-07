import React from "react";

import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="word">
          <h2>{props.results.word}</h2>
          <Phonetics phonetics={props.results.phonetics[0]} />
        </section>
        <section className="definition">
          {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <Meanings meanings={meanings} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
