import React, { useRef, useState } from 'react';
import style from './progress-bar.module.css';

const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const barRef = useRef();

  const onBtnClick = () => {
    setCount((prev) => prev + 1);
  };


  return (
    
    <div className={style.main}>
      <section className={style.area}>
        <div ref={barRef} className={count > 0 ? style.bar : ''} style={{ animationIterationCount: count }}></div>
      </section>
      <button onClick={onBtnClick}>Run {count > 0 && count}</button>
    </div>
  );
};

export default ProgressBar;
