import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span>{props.phonetics.text} </span>
      <a href={props.phonetics.audio} target="_blank">
        <FontAwesomeIcon icon={faVolumeHigh} />
      </a>
    </div>
  );
}
