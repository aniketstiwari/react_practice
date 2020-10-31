import React from 'react';
import Counter from './Counter';
import EventBind from './EventBind';
import Greet from './Greet';
import Welcome from './Welcome';
import ParentComponent from './ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './NameList';
import StyleSheet from './StyleSheet';
import Inline from './Inline';
import './appStyle.css';
import styles from './appStyle.module.css'
import Form from './Form';
import LifeCycleA from './LifeCycleA';
import FragementDemo from './FragementDemo';
import Table from './Table';
import PureComp from './PureComp';
import ParentComp from './ParentComp';
import RefsDemo from './RefsDemo';
import FocusInput from './FocusInput';
import FRParentInput from './FRParentInput';
import PortalDemo from './PortalDemo';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';
import CounterRenderPropPattern from './CounterRenderPropPattern';
import ComponentC from './ComponentC';
import PostList from './components/PostList';

function App() {
  return (
    <>
      { /*<Counter/> */ }
      {/* <Greet name="aniket" movie="inception"/> */}
      {/* <Welcome name="aniket" movie="inception"/> */}
      {/* <EventBind /> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      
      {/* <StyleSheet enabled={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Hello</h1> */}
      {/*Module css will help in resolving name conflict. For example the error class if 
      we place in Inline Component in future it can give css conflict. If you try to copy
      the module css in the other component it will throw an error*/}
      {/* <h1 className={styles.success}>How are you</h1> */}

      {/* <Form/> */}

      {/* <LifeCycleA/> */}

      {/* <FragementDemo/> */}
      {/* <Table/>  */}

      {/* <ParentComp/> */}

      {/* <RefsDemo/> */}

      {/* <FocusInput/ > */}

      {/* <FRParentInput/> */}

      {/* <PortalDemo/> */}

      {/* <ErrorBoundary>
        <Hero heroname="batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="joker"/>
      </ErrorBoundary> */}

      {/* When we pass props to component which in turn calls HOC pattern then the below
      componet won't receieve props directly */}
      {/* <ClickCounter name="Aniket"/>
      <HoverCounter/> */}

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/> */}
      {/* <User name={(isLoggedIn) => isLoggedIn ? "aniket" : ""}/> */}
      {/* In react it is possible to use a prop whose value is a function to control
      what is actually render by component */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? "aniket" : ""}/> */}
      
      {/*1st way */}
      {/* <CounterRenderPropPattern render={(count, handleCounter) => (
        <ClickCounterTwo count={count} handleCounter={handleCounter} />
      )} />
      <CounterRenderPropPattern render={(count, handleCounter) => (
        <HoverCounterTwo count={count} handleCounter={handleCounter} />
      )} /> */}

      {/*2nd way */}

      {/* <CounterRenderPropPattern> 
        {(count, handleCounter) => (
          <ClickCounterTwo count={count} handleCounter={handleCounter} />
        )} 
      </CounterRenderPropPattern>
      <CounterRenderPropPattern> 
        {(count, handleCounter) => (
          <HoverCounterTwo count={count} handleCounter={handleCounter} />
        )} 
      </CounterRenderPropPattern> */}

      {/* <ComponentC/> */}

      <PostList/>
     
    </>
  );
}

export default App;
