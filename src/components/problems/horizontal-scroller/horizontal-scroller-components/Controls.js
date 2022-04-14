import React from 'react';
import style from '../style.module.css';

const Controls = ({ onLeftClick, onRightClick }) => {
  return (
    <div className={style.controls}>
      <div className={style.leftControl} onClick={onLeftClick}>
        {'<'}
      </div>
      <div className={style.rightControl} onClick={onRightClick}>
        {'>'}
      </div>
    </div>
  );
};

export default Controls;
