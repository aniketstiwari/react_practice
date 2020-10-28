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

      <ClickCounter/>
      <HoverCounter/>
    </>
  );
}

export default App;
