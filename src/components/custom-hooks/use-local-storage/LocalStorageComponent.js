import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const LocalStorageComponent = () => {
  const [currentId, setCurrentId] = useLocalStorage('currentId', '');
  const [currentName, setCurrentName] = useLocalStorage('currentName', '');

  const handleIdChange = () => {
    setCurrentId(1233);
  };

  const handleNameChange = () => {
    setCurrentName('John Doe');
  };

  return (
    <div>
      <section>
        <p>currentId - {currentId}</p>
        <p>currentName - {currentName}</p>
      </section>
      <section>
        <button onClick={handleIdChange}>Set Id</button>
      </section>
      <section>
        <button onClick={handleNameChange}>Set Name</button>
      </section>
    </div>
  );
};

export default LocalStorageComponent;
