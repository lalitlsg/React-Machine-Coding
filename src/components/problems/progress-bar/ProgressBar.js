import React, { useRef, useState } from 'react';
import { MACHINE_CODING_HEADERS } from '../../../constant/constant';
import style from './progress-bar.module.css';

const ProgressBar = () => {
  const [count, setCount] = useState(0);
  const barRef = useRef();

  const onBtnClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section className={style.mainSection}>
      <header className={style.header}>{MACHINE_CODING_HEADERS.PROGRESS_BAR_HEADER}</header>

      <div className={style.main}>
        <section className={style.area}>
          <div ref={barRef} className={count > 0 ? style.bar : ''} style={{ animationIterationCount: count }}></div>
        </section>
        <button onClick={onBtnClick}>Run {count > 0 && count}</button>
      </div>
    </section>
  );
};

export default ProgressBar;
