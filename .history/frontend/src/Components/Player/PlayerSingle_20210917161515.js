import React from "react";

function PlayerSingle(props) {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <span className="card-title"></span>
          </div>
          <div className="card-content">
            <p>
              {props.player.firstName} {props.player.lastName}
            </p>
            <p>Email: {props.player.email}</p>
            <p>Strength: {props.player.endurance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSingle;
