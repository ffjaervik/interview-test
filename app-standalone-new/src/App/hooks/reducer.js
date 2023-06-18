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
      if (action.winner.player === "X") {
        console.log("X is winner");
        return {
          ...state,
          gameHistory: [{ squares: Array(9).fill(null) }],
          stepNumber: 0,
          xIsNext: true,
          playerScores: {
            xScore: state.playerScores.xScore + 1,
            oScore: state.playerScores.oScore,
          },
        };
      } else if (action.winner.player === "O") {
        console.log("O is winner");
        return {
          ...state,
          gameHistory: [{ squares: Array(9).fill(null) }],
          stepNumber: 0,
          xIsNext: true,
          playerScores: {
            xScore: state.playerScores.xScore,
            oScore: state.playerScores.oScore + 1,
          },
        };
      }
    default:
      return state;
  }
};

export default reducer;
