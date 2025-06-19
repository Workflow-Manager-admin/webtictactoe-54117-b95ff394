import React from 'react';

// PUBLIC_INTERFACE
/**
 * ResetButton component - Calls reset handler on click.
 */
const ResetButton = ({ onReset }) => (
  <button className="ttt-reset-btn" onClick={onReset}>
    Reset Game
  </button>
);

export default ResetButton;
