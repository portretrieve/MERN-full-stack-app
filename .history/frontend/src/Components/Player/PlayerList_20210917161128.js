import React from "react";

function PlayerList(props) {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
        </li>
        {props.players.map((player) => (
          <a
            href="#!"
            className="collection-item"
            key={player._id}
            onClick={() => props.updateCurrentPlayer(player)}
          >
            {player.firstName} {player.lastName}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
