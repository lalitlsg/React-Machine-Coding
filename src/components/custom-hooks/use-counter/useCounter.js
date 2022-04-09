import { useState } from 'react';

export const useCounter = (initialValue = 0, steps = 1) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => setCount((prevCount) => prevCount + steps);
  const decrementCount = () => setCount((prevCount) => prevCount - steps);

  return [count, incrementCount, decrementCount];
};
