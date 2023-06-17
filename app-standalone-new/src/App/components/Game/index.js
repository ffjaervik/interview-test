import React, { useReducer } from "react";
import Board from "../Board";
import Score from "../Score/Score";
import calculateWinner from "../../utils/calculateWinner";


const defaultState = {
  gameHistory: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
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

    case "load-new-game":
      return {};

    default:
      return state;
  }
};

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { gameHistory, stepNumber, xIsNext } = state;
  const xScore = 0;
    const oScore = 0;

  const current = gameHistory[stepNumber];
  const winner = calculateWinner(current.squares);
  console.log(winner)
  

  const handleClick = (i) => {
    // const history = gameHistory.slice(0, stepNumber + 1);
    // const current = history[history.length - 1];
    // const squares = current.squares.slice();

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

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} winHighlight={winner ? winner.squares : []}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
        <Score xScore={xScore} oScore={oScore}/>
    </div>
  );
};

export default Game;
