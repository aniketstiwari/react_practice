import React from 'react';
import Counter from './Counter';
import Greet from './Greet';
import Welcome from './Welcome';

function App() {
  return (
    <>
      { /*<Counter/> */ }
      {/* <Greet name="aniket" movie="inception"/> */}
      <Welcome name="aniket" movie="inception"/>
    </>
  );
}

export default App;
