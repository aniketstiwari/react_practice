import React from 'react';
import Counter from './Counter';
import EventBind from './EventBind';
import Greet from './Greet';
import Welcome from './Welcome';

function App() {
  return (
    <>
      { /*<Counter/> */ }
      {/* <Greet name="aniket" movie="inception"/> */}
      {/* <Welcome name="aniket" movie="inception"/> */}
      <EventBind />
    </>
  );
}

export default App;
