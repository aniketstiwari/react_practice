import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "shivam"
        }
        console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state){
        //this method take two arguments props and state and has to return new state or null
        console.log("LifeCycleB getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate")
    }

    render(){
        console.log("LifeCycleB render")
        return <div>LifeCycleB hii</div>
    }
}

export default LifeCycleB;