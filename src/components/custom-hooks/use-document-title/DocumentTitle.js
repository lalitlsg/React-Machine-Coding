import React from 'react';
import { useDocumentTitle } from './useDocumentTitle';

const DocumentTitle = () => {
  const [count, setCount] = useDocumentTitle(0);

  const incrementCounter = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <button onClick={incrementCounter}>Click - {count}</button>
    </div>
  );
};

export default DocumentTitle;
