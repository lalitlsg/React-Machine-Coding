import React from 'react';
import style from './problems-list.module.css';
import Header from '../header/Header';

const ProblemListContainer = ({ handleLinkNameClick, listOfProblems, headerText }) => {
  const renderListOfProblems = listOfProblems.map((p) => (
    <li className={style.problem} key={p.uid} data-uid={p.uid}>
      {p.linkName}
      {p.subList && (
        <ol className={style.subList}>
          {p.subList.map((sub) => (
            <li className={style.subProblem} key={sub.id} data-uid={sub.uid}>
              {sub.name}
            </li>
          ))}
        </ol>
      )}
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
