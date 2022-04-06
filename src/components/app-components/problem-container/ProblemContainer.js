import React from 'react';
import style from './problem.module.css';

const ProblemContainer = ({ currentProblemComponent, handleLinkNameClick }) => {
  return (
    <div className={style.currentProblemContainer}>
      <div className={style.backButton} onClick={() => {handleLinkNameClick(null)}}>Back</div>
      <div >{currentProblemComponent}</div>
    </div>
  );
};

export default ProblemContainer;
