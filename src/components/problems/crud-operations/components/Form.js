import React from 'react';
import { useInput } from '../../../custom-hooks/use-input/useInput';
import style from '../crud.module.css';

const Form = ({ handlePopupClose, handleSaveEmployee, isEditPhase, isDeletePhase, currentSelectedEmployee }) => {
  const [name, bindName] = useInput(isEditPhase ? currentSelectedEmployee.name : '');
  const [salary, bindSalary] = useInput(isEditPhase ? currentSelectedEmployee.salary : '');
  const [skills, bindSkills] = useInput(isEditPhase ? currentSelectedEmployee.skills.join(',') : '');
  const [age, bindAge] = useInput(isEditPhase ? currentSelectedEmployee.age : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEmployee({ name, salary: Number(salary), skills: skills.split(','), age: Number(age) });
  };

  return (
    <section>
      <h1 className={style.formHeading}>
        {isEditPhase ? 'Edit Record' : isDeletePhase ? 'Delete Record' : 'Add Record'}
      </h1>
      <form className={style.form} onSubmit={handleSubmit}>
        {isDeletePhase ? (
          'Are you sure?'
        ) : (
          <>
            <article className={style.formItem}>
              <label htmlFor="ename">Enter Name</label>
              <input type="text" id="ename" {...bindName} autoComplete="off" />
            </article>
            <article className={style.formItem}>
              <label htmlFor="esalary">Enter Salary</label>
              <input type="number" id="esalary" {...bindSalary} autoComplete="off" />
            </article>
            <article className={style.formItem}>
              <label htmlFor="eage">Enter Age</label>
              <input type="number" id="eage" {...bindAge} autoComplete="off" />
            </article>
            <article className={style.formItem}>
              <label htmlFor="eskills">{`Enter Skills (Comma Seperated)`}</label>
              <input type="text" id="eskills" {...bindSkills} autoComplete="off" />
            </article>
          </>
        )}
        <article className={style.formItem}>
          <button type="submit">{isDeletePhase ? 'Delete' : 'Save'}</button>
          <button onClick={handlePopupClose}>Close</button>
        </article>
      </form>
    </section>
  );
};

export default Form;
