import React from 'react';
import Counter from './Counter';
import EventBind from './EventBind';
import Greet from './Greet';
import Welcome from './Welcome';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <>
      { /*<Counter/> */ }
      {/* <Greet name="aniket" movie="inception"/> */}
      {/* <Welcome name="aniket" movie="inception"/> */}
      {/* <EventBind /> */}
      <ParentComponent/>
    </>
  );
}

export default App;
