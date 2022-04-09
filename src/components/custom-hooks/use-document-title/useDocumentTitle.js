import { useEffect, useState } from 'react';

const currentDocumentTitle = document.title;

export const useDocumentTitle = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    document.title = `Clicked ${count} Times`;

    return () => {
      document.title = currentDocumentTitle;
    };
  }, [count]);

  return [count, setCount];
};
