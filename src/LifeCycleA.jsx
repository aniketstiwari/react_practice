import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Aniket"
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
        //this method take two arguments props and state and has to return new state or null
        console.log("LifeCycleA getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate")
    }

    ChangeState = () => {
        this.setState({
            name: "Anike tIWARI"
        })
    }

    render(){
        console.log("LifeCycleA render")
        return <>
          <div>hii</div>
          <button onClick={this.ChangeState}>Click me</button>
          <LifeCycleB/>
        </>
    }
}

export default LifeCycleA;