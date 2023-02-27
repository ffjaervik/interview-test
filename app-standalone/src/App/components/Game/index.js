import React, { useState, useEffect } from "react";
import Board from "../Board";
import Score from "../Score";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [gameHistory, setGameHistory] = useState([
    { squares: Array(9).fill(null) },
  ]); // Start of game
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [newGame, setNewGame] = React.useState(false);
  const [playersNames, setPlayersNames] = useState({
    player1: "Player 1",
    player2: "Player 2",
  });
  const [playerIcons, setPlayerIcons] = useState({
    player1: "X",
    player2: "O",
  });

  const handleNamesChange = () => {
    setPlayersNames({
      player1: prompt("Enter Player 1 name: "),
      player2: prompt("Enter Player 2 name: "),
    });
  };
  const handleIconsChange = () => {
    setPlayerIcons({
      player1: prompt("Enter Player 1 icon: "),
      player2: prompt("Enter Player 2 icon: "),
    });
  };

  //Runs after each click and valudates a winning move.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { player: squares[a], line: [a, b, c] };
      }
    }

    return null;
  };

  const handleClick = (i) => {
    const history = gameHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? playerIcons.player1 : playerIcons.player2;

    setGameHistory([...history, { squares }]);
    setStepNumber(history.length);
    setXisNext(!xIsNext);
    // console.log("stepNumber", stepNumber);
    // console.log("gamehistory", gameHistory);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const current = gameHistory[stepNumber];
  // console.log("current", current);
  const winner = calculateWinner(current.squares);

  

  //Trigger effect to reset the game and track score after a winner is declared
  //newGame(boolean) serves as trigger
  useEffect(() => {
    if (winner) {
      if (winner.player === "X") {
        setXScore(xScore + 1);
      } else {
        setOScore(oScore + 1);
      }
      setGameHistory([{ squares: Array(9).fill(null) }]);
      setStepNumber(0);
      setXisNext(true);
    }
  }, [newGame]);

  const moves = gameHistory.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  //displays name of winner and user who's turn it is. If all Squares are filled and there is no winner, it displays "Draw"
  let status;
  if (winner) {
    if (winner.player === "X") {
      status = "Winner: " + playersNames.player1 + "!";
    } else {
      status = "Winner: " + playersNames.player2 + "!";
    }
  } else if (!current.squares.includes(null)) {
    status = "Draw!";
  } else {
    status =
      "Next Move: " +
      (xIsNext
        ? `${playersNames.player1}(${playerIcons.player1})`
        : `${playersNames.player2}(${playerIcons.player2})`);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          winHighlight={winner ? winner.line : []}
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        {!winner && <ol>{moves}</ol>}
        {winner && (
          <button id="button" onClick={() => setNewGame(!newGame)}>Play Next Round</button>
        )}
      </div>
      <Score
        playersNames={playersNames}
        handleIconsChange={handleIconsChange}
        handleNamesChange={handleNamesChange}
        xScore={xScore}
        oScore={oScore}
      />
    </div>
  );
};

export default Game;
