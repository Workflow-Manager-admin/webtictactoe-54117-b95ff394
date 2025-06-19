import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerIndicator from './components/PlayerIndicator';
import NotificationBanner from './components/NotificationBanner';
import ResetButton from './components/ResetButton';

function App() {
  // Placeholder: No state logic yet
  const currentPlayer = 'X';
  const notification = '';

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> Tic Tac Toe
            </div>
          </div>
        </div>
      </nav>

      <main className="ttt-main">
        <div className="ttt-board-container">
          <PlayerIndicator current={currentPlayer} />
          <NotificationBanner message={notification} />
          <GameBoard />
          <ResetButton onReset={() => {}} />
        </div>
      </main>
    </div>
  );
}

export default App;