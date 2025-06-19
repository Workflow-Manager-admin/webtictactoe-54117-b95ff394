// PUBLIC_INTERFACE
/**
 * GameBoard component - Displays the tic-tac-toe grid with cell state and click handler.
 * Props:
 *   board: 2D array of 'X', 'O', or ''.
 *   onCellClick: function(row, col).
 *   disabled: bool to disable board clicks.
 */
import React from 'react';

const GameBoard = ({ board, onCellClick, disabled }) => {
  return (
    <div className="ttt-board">
      {[0, 1, 2].map(row =>
        <div className="ttt-row" key={row}>
          {[0, 1, 2].map(col => {
            const value = board?.[row]?.[col] || '';
            return (
              <div
                className="ttt-cell"
                key={col}
                onClick={() => !disabled && value === '' ? onCellClick(row, col) : undefined}
                style={{
                  cursor: !disabled && value === '' ? 'pointer' : 'default',
                  color: value === 'X' ? '#1565c0' : value === 'O' ? '#c62828' : undefined,
                  opacity: disabled && value === '' ? 0.55 : 1,
                }}
                aria-label={
                  value
                    ? `Player ${value}`
                    : (disabled ? 'disabled' : 'empty cell')
                }
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GameBoard;
