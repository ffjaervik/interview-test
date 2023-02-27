import React from "react";

export default function Score({
  playersNames,
  handleIconsChange,
  handleNamesChange,
  xScore,
  oScore,
}) {
  return (
    <div className="players-info">
      <p>
        {playersNames.player1} matches won: {xScore}
      </p>
      <p>
        {playersNames.player2} matches won: {oScore}
      </p>

      <button id="playerButton" onClick={handleNamesChange}>
        Change Player Names
      </button>
      <button id="iconButton" onClick={handleIconsChange}>
        Change Player Icons
      </button>
    </div>
  );
}
