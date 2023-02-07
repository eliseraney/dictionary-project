import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      <p>{props.meanings.definitions[0].definition}</p>
      <div>
        <em>{props.meanings.definitions[0].example}</em>
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}
