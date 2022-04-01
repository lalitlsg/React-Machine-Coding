import { useState } from 'react';
import './App.css';
import ChessBoard from './components/chess-board/ChessBoard';
import DayCalender from './components/day-calender/DayCalender';
import ProgressBar from './components/progress-bar/ProgressBar';
import StarRating from './components/star-rating/StarRating';

function App() {

  return (
    <div className="main-container">
      <StarRating />
      <ChessBoard />
      <ProgressBar />
      <DayCalender />
    </div>
  );
}

export default App;
