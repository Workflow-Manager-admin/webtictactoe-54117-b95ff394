import React from 'react';

// PUBLIC_INTERFACE
/**
 * PlayerIndicator component - Shows player turn/highlights.
 * Stateless placeholder for now.
 */
const PlayerIndicator = ({ current }) => {
  return (
    <div className="ttt-player-indicator">
      <span className={current === 'X' ? 'active-player' : ''}>X</span>
      <span> vs </span>
      <span className={current === 'O' ? 'active-player' : ''}>O</span>
    </div>
  );
};

export default PlayerIndicator;
