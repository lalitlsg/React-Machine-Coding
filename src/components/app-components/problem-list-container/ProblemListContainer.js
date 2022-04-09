import React from 'react';
import style from './problems-list.module.css';
import Header from '../header/Header';

const ProblemListContainer = ({ handleLinkNameClick, listOfProblems, headerText }) => {
  const renderListOfProblems = listOfProblems.map((p) => (
    <li className={style.problem} key={p.uid} data-uid={p.uid}>
      {p.linkName}
    </li>
  ));
  return (
    <div className={style.main}>
      <Header text={headerText} />
      <ol className={style.problemListContainer} onClick={handleLinkNameClick}>
        {renderListOfProblems}
      </ol>
    </div>
  );
};

export default ProblemListContainer;
