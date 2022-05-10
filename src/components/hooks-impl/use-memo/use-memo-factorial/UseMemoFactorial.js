import React, { useMemo, useState } from 'react';
import style from './style.module.css';

const factorialOfNumber = (number) => {
  console.log('factorialOfNumber');
  return number <= 1 ? 1 : number * factorialOfNumber(number - 1);
};

const UseMemoFactorial = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => factorialOfNumber(number), [number]);

  const onNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const onCountChange = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <section className={style.section}>
        <h3>UseMemoFactorial</h3>
      </section>
      <section className={style.section}>
        Factorial of
        <input type="number" value={number} onChange={onNumberChange} />
        is {factorial}
      </section>
      <section className={style.section}>
        <button onClick={onCountChange}>Clicked {count} times</button>
      </section>
    </div>
  );
};

export default UseMemoFactorial;
