import React, { useState } from 'react';
import style from '../crud.module.css';

const Employee = ({ e, handleEditRecord, handleDeleteRecord }) => {
  const onEditClick = () => {
    handleEditRecord(e);
  };

  const onDeleteClick = () => {
    handleDeleteRecord(e);
  };

  return (
    <div className={style.employee}>
      <section>Name - {e.name}</section>
      <section>Salary - {e.salary}</section>
      <section>Age - {e.age}</section>
      <section>Skills - {e.skills.join(', ')}</section>

      <div className={style.employeeActions}>
        <button onClick={onEditClick}>Edit</button>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default Employee;
