import React from "react";
import PlayerSingle from "../Player/PlayerSingle";

function PlayerList(props) {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
        </li>
        {props.players.map((player) => {
          return <a href="#" className="collection-item" key={player._id}></a>;
        })}
      </ul>
    </div>
  );
}

export default PlayerList;
