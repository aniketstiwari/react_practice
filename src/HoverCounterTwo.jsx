import React, { Component } from 'react';

class HoverCounterTwo extends Component {
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
                <p onMouseOver={this.handleCounter}>{this.state.count} Hover Me</p>
            </div>
        );
    }
}

export default HoverCounterTwo;