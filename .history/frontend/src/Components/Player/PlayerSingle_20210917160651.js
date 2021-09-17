import React from "react";

function PlayerSingle(props) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p></p>
          </div>
          <div className="card-action">
            <a href="#!">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSingle;
