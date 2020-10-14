import React from 'react';
import Counter from './Counter';
import EventBind from './EventBind';
import Greet from './Greet';
import Welcome from './Welcome';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';

function App() {
  return (
    <>
      { /*<Counter/> */ }
      {/* <Greet name="aniket" movie="inception"/> */}
      {/* <Welcome name="aniket" movie="inception"/> */}
      {/* <EventBind /> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      <NameList/>
    </>
  );
}

export default App;
