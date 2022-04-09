import { useState } from 'react';

export const useInput = (initalValue = '') => {
  const [value, setValue] = useState(initalValue);

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  const reset = () => setValue('');

  return [value, bind, reset];
};
