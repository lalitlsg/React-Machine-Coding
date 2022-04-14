import React from 'react';
import style from './popup.module.css';

const Popup = ({ children }) => {
  return (
    <div className={style.overlay}>
      <section className={style.main}>{children}</section>
    </div>
  );
};

export default Popup;
