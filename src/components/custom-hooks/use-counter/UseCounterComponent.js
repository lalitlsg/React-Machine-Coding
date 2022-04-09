import React from 'react';
import { useCounter } from './useCounter';

const UseCounterComponent = () => {
  const [count1, incrementCount1, decrementCount1] = useCounter(0, 1);
  const [count2, incrementCount2, decrementCount2] = useCounter(10, 2);

  return (
    <div>
      <div>
        <p>Count1 - {count1}</p>
        <button onClick={incrementCount1}>Inc Counter 1</button>
        <button onClick={decrementCount1}>Dec Counter 1</button>
      </div>
      <div>
        <p>Count2 - {count2}</p>
        <button onClick={incrementCount2}>Inc Counter 2</button>
        <button onClick={decrementCount2}>Dec Counter 2</button>
      </div>
    </div>
  );
};

export default UseCounterComponent;
