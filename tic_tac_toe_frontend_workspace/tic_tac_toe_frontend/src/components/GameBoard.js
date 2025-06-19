import React from 'react';

// PUBLIC_INTERFACE
/**
 * GameBoard component - Displays the tic-tac-toe grid.
 * Stateless for now; interactivity will be added later.
 */
const GameBoard = () => {
  return (
    <div className="ttt-board">
      {/* Render 3x3 empty grid for initial layout */}
      {[0, 1, 2].map(row => (
        <div className="ttt-row" key={row}>
          {[0, 1, 2].map(col => (
            <div className="ttt-cell" key={col}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
