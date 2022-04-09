import React from 'react';
import { useInput } from './useInput';

const UseInputComponent = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const resetAll = () => {
    resetFirstName();
    resetLastName();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <section>
          <label htmlFor="firstName">Enter Firstname</label>
          <input type="text" name="firstName" {...bindFirstName} autoComplete="off" />
        </section>
        <section>
          <label htmlFor="lastName">Enter LastName</label>
          <input type="text" name="lastName" {...bindLastName} autoComplete="off" />
        </section>
        <section>
          {firstName} - {lastName}
        </section>
        <section>
          <button type="submit">
            Summit
          </button>
          <button onClick={resetAll} type="reset">
            Reset
          </button>
        </section>
      </form>
    </div>
  );
};

export default UseInputComponent;
