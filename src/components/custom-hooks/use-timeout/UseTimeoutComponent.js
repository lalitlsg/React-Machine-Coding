import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

const UseTimeoutComponent = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState(null);

  const nameCallback = () => {
    setName('Hello');
  };

  const idCallback = () => {
    setId(1);
  };

  useTimeout(nameCallback, 3000);
  useTimeout(idCallback, 5000);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  console.log('after useEffect');

  return (
    <div>
      <section>Name after 3 sec : {name && name} </section>
      <section>Id after 5 sec : {id && id}</section>
    </div>
  );
};

export default UseTimeoutComponent;
