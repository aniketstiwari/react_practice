import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {console.log(this.state.count)})
    // }

    increment() {
        this.setState((prevstate, props) => ({
            count: prevstate.count + 1
        }))
    }

    incrementFiveTimes() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() { 
     return(
        <>
            <h1>Counter {this.state.count}</h1>
            <button onClick={ () => this.incrementFiveTimes()}>Click me</button>
        </>
     )
    }
}

export default Counter;
