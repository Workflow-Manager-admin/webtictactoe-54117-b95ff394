import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import PlayerIndicator from './components/PlayerIndicator';
import NotificationBanner from './components/NotificationBanner';
import ResetButton from './components/ResetButton';

// Helper to check winner
function calculateWinner(board) {
  const lines = [
    // Rows
    [ [0,0], [0,1], [0,2] ],
    [ [1,0], [1,1], [1,2] ],
    [ [2,0], [2,1], [2,2] ],
    // Columns
    [ [0,0], [1,0], [2,0] ],
    [ [0,1], [1,1], [2,1] ],
    [ [0,2], [1,2], [2,2] ],
    // Diagonals
    [ [0,0], [1,1], [2,2] ],
    [ [0,2], [1,1], [2,0] ],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]];
    }
  }
  return null;
}

// Returns true if board is full
function isFull(board) {
  return board.every(row => row.every(cell => cell));
}

function App() {
  // 3x3 board: [['', '', ''], ...]
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [status, setStatus] = useState('playing'); // 'playing', 'win', 'draw'
  const [winner, setWinner] = useState(null);

  // PUBLIC_INTERFACE
  const handleCellClick = (rowIndex, colIndex) => {
    if (status !== 'playing') return;
    if (board[rowIndex][colIndex] !== '') return; // Only allow empty cell

    const newBoard = board.map(row => row.slice());
    newBoard[rowIndex][colIndex] = currentPlayer;
    const win = calculateWinner(newBoard);
    if (win) {
      setBoard(newBoard);
      setStatus('win');
      setWinner(win);
      return;
    }
    if (isFull(newBoard)) {
      setBoard(newBoard);
      setStatus('draw');
      setWinner(null);
      return;
    }
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // PUBLIC_INTERFACE
  const handleReset = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setCurrentPlayer('X');
    setStatus('playing');
    setWinner(null);
  };

  let notification = '';
  if (status === 'win') {
    notification = `Player ${winner} wins!`;
  } else if (status === 'draw') {
    notification = "It's a draw!";
  }

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
          <GameBoard
            board={board}
            onCellClick={handleCellClick}
            disabled={status !== 'playing'}
          />
          <ResetButton onReset={handleReset} />
        </div>
      </main>
    </div>
  );
}

export default App;