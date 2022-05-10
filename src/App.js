import { useState } from 'react';
import './App.css';
import ProblemContainer from './components/app-components/problem-container/ProblemContainer';
import { customHooksProblems } from './components/app-components/problem-list-container/custome-hooks-problems';
import { hooksImplProblems } from './components/app-components/problem-list-container/hooks-impl-problems';
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

  const problemContainer = (
    <ProblemContainer currentProblemComponent={currentProblemComponent} handleLinkNameClick={handleLinkNameClick} />
  );

  const machineCodingProblemsList = (
    <ProblemListContainer
      handleLinkNameClick={handleLinkNameClick}
      listOfProblems={machineCodingProblems}
      headerText={'Machine Coding Problems'}
    />
  );

  const customHooksProblemsList = (
    <ProblemListContainer
      handleLinkNameClick={handleLinkNameClick}
      listOfProblems={customHooksProblems}
      headerText={'Custom Hooks Problems'}
    />
  );

  const hooksImplProblemsList = (
    <ProblemListContainer
      handleLinkNameClick={handleLinkNameClick}
      listOfProblems={hooksImplProblems}
      headerText={'Hooks Implementation Problems'}
    />
  );

  return (
    <div className="main-container">
      {currentProblemComponent ? (
        problemContainer
      ) : (
        <>
          {machineCodingProblemsList}
          {customHooksProblemsList}
          {hooksImplProblemsList}
        </>
      )}
    </div>
  );
}

export default App;
