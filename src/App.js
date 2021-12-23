import React from 'react';
import ErrorExample from './tutorial/1-useState/error-example';
import ArrayExample from './tutorial/1-useState/2-useState-array';
import ObjectExample from './tutorial/1-useState/3-useState-object';
import Counter from './tutorial/1-useState/4-useState-counter';
import UseEffectBasic from './tutorial/2-useEffect/1-useEffect-basic';
import CleanUpFunction from './tutorial/2-useEffect/2-useEffect-cleanupfunction';
import FetchData from './tutorial/2-useEffect/3-useEffect-fetchdata';

function App() {
  return (
    <div className='container'>
      <ErrorExample />
      <ArrayExample />
      <ObjectExample />
      <Counter />
      <UseEffectBasic />
      <CleanUpFunction />
      <FetchData />
    </div>
  );
}

export default App;
