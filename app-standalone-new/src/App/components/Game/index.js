import React, { useReducer, useState, useEffect } from "react";
import Board from "../Board";
import Score from "../Score/Score";
import calculateWinner from "../../utils/calculateWinner";
import reducer from "../../hooks/reducer";

const defaultState = {
  gameHistory: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  playerScores: { xScore: 0, oScore: 0 },
};

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [newGame, setNewGame] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { gameHistory, stepNumber, xIsNext, playerScores } = state;

  const current = gameHistory[stepNumber];
  const winner = calculateWinner(current.squares);

  useEffect(() => {
    console.log("useEffect run");
    if (winner) {
      dispatch({ type: "load-new-game", winner });
    }
  }, [newGame]);

  const handleClick = (i) => {
    const currentSquares = [...current.squares];

    if (winner || currentSquares[i]) {
      return;
    }

    currentSquares[i] = xIsNext ? "X" : "O";

    dispatch({
      type: "user-makes-move",
      currentGameHistory: { squares: currentSquares },
    });
  };

  const jumpTo = (step) => {
    dispatch({ type: "user-jumps-to-move-number", step });
  };

  const moves = gameHistory.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner.player;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  console.log(state);
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          winHighlight={winner ? winner.lines : []}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        {!winner ? (
          <ol>{moves}</ol>
        ) : (
          <button id="button" onClick={() => setNewGame(!newGame)}>
            Play Next Round
          </button>
        )}
      </div>
      <Score xScore={playerScores.xScore} oScore={playerScores.oScore} />
    </div>
  );
};

export default Game;
