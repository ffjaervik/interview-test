import React from "react";
import { useState } from "react";

export default function Score({playersNames, handleIconsChange, handleNamesChange, xScore, oScore}) {
       


  return (
    <div className="players-info">
        <p>
          {playersNames.player1} matches won: {xScore}
        </p>
        <p>
          {playersNames.player2} matches won: {oScore}
        </p>

        <button onClick={handleNamesChange}>Change Player Names</button>
        <button onClick={handleIconsChange}>Change Player Icons</button>
      </div>
  );
}
