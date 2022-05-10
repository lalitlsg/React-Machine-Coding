import React from 'react';
import { useState } from 'react';
import { useIsFirstRender } from './useIsFirstRender';

const FirstRenderComponent = () => {
  const isFirstRender = useIsFirstRender();
  const [name, setName] = useState('');
 

  return (
    <div>
      <section>{isFirstRender && 'First Render'}</section>
      <section>
        <button onClick={() => setName('Lalit')}>Set Name</button>
      </section>
      <section>{name}</section>
    </div>
  );
};

export default FirstRenderComponent;
