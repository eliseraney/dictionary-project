import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="photo-grid row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={photo.src.landscape} alt="" className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
