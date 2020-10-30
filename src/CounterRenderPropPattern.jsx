import React, { Component } from 'react';

class CounterRenderPropPattern extends Component {
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
                {this.props.render(this.state.count, this.handleCounter)}
            </div>
        );
    }
}

export default CounterRenderPropPattern;