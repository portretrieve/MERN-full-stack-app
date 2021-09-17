import React from "react";

function PlayerSingle(props) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>Phone: {props.player.phone}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSingle;
