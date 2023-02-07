import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section className="meaning">
        <h5>{props.meanings.partOfSpeech}</h5>
        <p>{props.meanings.definitions[0].definition}</p>
        <div>
          <p className="example">{props.meanings.definitions[0].example}</p>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      </section>
    </div>
  );
}
