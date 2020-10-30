import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    render() {
        const {count, handleCounter} = this.props;
        return (
            <div>
                <button onClick={handleCounter}>{count} Click Me</button>
            </div>
        );
    }
}

export default ClickCounterTwo;