import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleCounter = () => {
        this.setState((prevstate) => ({
            count: prevstate.count + 1
        }))
         
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCounter}>{this.state.count} Click Me</button>
            </div>
        );
    }
}

export default ClickCounterTwo;