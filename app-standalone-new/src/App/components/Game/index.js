import React, { useReducer, useState, useEffect } from "react";
import Board from "../Board";
import Score from "../Score/Score";
import calculateWinner from "../../utils/calculateWinner";

const defaultState = {
  gameHistory: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  xScore: 0,
  oScore: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "user-makes-move":
      return {
        ...state,
        gameHistory: [
          ...state.gameHistory.slice(0, state.stepNumber + 1),
          action.currentGameHistory,
        ],
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext,
      };

    case "user-jumps-to-move-number":
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
      };

    case "player-victory":
      if (action.winner.player === "X") {
        console.log("X is winner");
        return {
          ...state,
          gameHistory: [{ squares: Array(9).fill(null) }],
          stepNumber: 0,
          xIsNext: true,
          xScore: state.xScore + 1,
        };
      } else if (action.winner.player === "O") {
        console.log("O is winner");
        return {
          ...state,
          gameHistory: [{ squares: Array(9).fill(null) }],
          stepNumber: 0,
          xIsNext: true,
          oScore: state.oScore + 1,
        };
      }

    case "load-new-game":
      return {
        state,
      };

    default:
      return state;
  }
};

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [newGame, setNewGame] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { gameHistory, stepNumber, xIsNext, xScore, oScore } = state;

  const current = gameHistory[stepNumber];
  const winner = calculateWinner(current.squares);

  useEffect(() => {
    console.log("useEffect run");
    if (winner) {
      dispatch({ type: "player-victory", winner });
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
      <Score xScore={xScore} oScore={oScore} />
      <button onClick={() => dispatch("load-new-game")}>load game</button>
    </div>
  );
};

export default Game;
