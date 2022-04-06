import { useState } from 'react';
import './App.css';
import Header from './components/app-components/header/Header';
import ProblemContainer from './components/app-components/problem-container/ProblemContainer';
import ProblemListContainer from './components/app-components/problem-list-container/ProblemListContainer';
import constant from './components/constant/constant';
import ChessBoard from './components/problems/chess-board/ChessBoard';
import DayCalender from './components/problems/day-calender/DayCalender';
import ProgressBar from './components/problems/progress-bar/ProgressBar';
import StarRating from './components/problems/star-rating/StarRating';

const problemComponents = {
  [constant.STAR_RATING]: <StarRating />,
  [constant.CHESS_BOARD]: <ChessBoard />,
  [constant.PROGRESS_BAR]: <ProgressBar />,
  [constant.DAY_CALENDER]: <DayCalender />,
};

function App() {
  const [currentProblemComponent, setCurrentProblemComponent] = useState(null);
  const handleLinkNameClick = (e) => {
    if (e === null) {
      setCurrentProblemComponent(null);
    } else if (e.target.dataset.uid in problemComponents) {
      setCurrentProblemComponent(problemComponents[e.target.dataset.uid]);
    }
  };

  return (
    <div className="main-container">
      <Header />
      {currentProblemComponent ? (
        <ProblemContainer currentProblemComponent={currentProblemComponent} handleLinkNameClick={handleLinkNameClick} />
      ) : (
        <ProblemListContainer handleLinkNameClick={handleLinkNameClick} />
      )}
    </div>
  );
}

export default App;
