import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "shivam"
        }
        console.log("LifeCycleB 1")
    }

    static getDerivedStateFromProps(props, state){
        //this method take two arguments props and state and has to return new state or null
        console.log("LifeCycleB 2")
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleB 4")
    }

    render(){
        console.log("LifeCycleB 3")
        return <div>LifeCycleB hii</div>
    }
}

export default LifeCycleB;