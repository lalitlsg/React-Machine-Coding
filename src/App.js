import './App.css';
import ChessBoard from './components/chess-board/ChessBoard';
import StarRating from './components/star-rating/StarRating';

function App() {
  return (
    <div className='main-container'>
      <StarRating />
      <ChessBoard />
    </div>
  );
}

export default App;
