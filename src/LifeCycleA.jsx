import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Aniket"
        }
        console.log("LifeCycleA 1")
    }

    static getDerivedStateFromProps(props, state){
        //this method take two arguments props and state and has to return new state or null
        console.log("LifeCycleA 2")
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleA 4")
    }

    render(){
        console.log("LifeCycleA 3")
        return <>
          <div>hii</div>
          <LifeCycleB/>
        </>
    }
}

export default LifeCycleA;