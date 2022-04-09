import { useState } from 'react';
import './App.css';
import ProblemContainer from './components/app-components/problem-container/ProblemContainer';
import { customHooksProblems } from './components/app-components/problem-list-container/custome-hooks-problems';
import { machineCodingProblems } from './components/app-components/problem-list-container/machine-coding-problems';
import ProblemListContainer from './components/app-components/problem-list-container/ProblemListContainer';
import { problemComponents } from './components/problems';

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
      {currentProblemComponent ? (
        <ProblemContainer currentProblemComponent={currentProblemComponent} handleLinkNameClick={handleLinkNameClick} />
      ) : (
        <div>
          <ProblemListContainer
            handleLinkNameClick={handleLinkNameClick}
            listOfProblems={machineCodingProblems}
            headerText={'Machine Coding Problems'}
          />
          <ProblemListContainer
            handleLinkNameClick={handleLinkNameClick}
            listOfProblems={customHooksProblems}
            headerText={'Custom Hooks Problems'}
          />
        </div>
      )}
    </div>
  );
}

export default App;
