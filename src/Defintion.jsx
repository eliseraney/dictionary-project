import React from "react";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h5>{props.definition.partOfSpeech}</h5>
      {props.definition.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>{definitions.definition}</p>
            <p>
              <em>{definitions.example}</em>
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
