import React from 'react';
import style from './problems-list.module.css';
import constant from '../../constant/constant';

const listOfProblems = [
    { linkName: 'Star Rating', componentName: 'star-rating', uid: constant.STAR_RATING },
    { linkName: 'Chess Board', componentName: 'chess-board', uid: constant.CHESS_BOARD },
    { linkName: 'Progress Bar', componentName: 'progress-bar', uid: constant.PROGRESS_BAR },
    { linkName: 'Day Calender', componentName: 'day-calender', uid: constant.DAY_CALENDER },
  ];
  

const renderListOfProblems = listOfProblems.map((p) => (
    <li className={style.problem} key={p.uid} data-uid={p.uid}>
      {p.linkName}
    </li>
  ));
  

const ProblemListContainer = ({handleLinkNameClick}) => {
  return (
    <div className={style.main}>
      <ol className={style.problemListContainer} onClick={handleLinkNameClick}>
        {renderListOfProblems}
      </ol>
    </div>
  );
};

export default ProblemListContainer;
