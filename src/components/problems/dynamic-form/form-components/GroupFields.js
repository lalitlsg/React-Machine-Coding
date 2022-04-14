import React from 'react';
import style from '../dynamic-form.module.css';

const GroupFields = ({ fieldType, children }) => {
  const { label } = fieldType;
  return (
    <div className={style.groupFields}>
      <section className={style.label}>
        <label>{label}</label>
      </section>
      <section className={style.children}>{children}</section>
    </div>
  );
};

export default GroupFields;
