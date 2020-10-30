import React, { Component } from 'react';

class HoverCounterTwo extends Component {
    render() {
        const {count, handleCounter} = this.props;
        return (
            <div>
                <p onMouseOver={handleCounter}>{count} Hover Me</p>
            </div>
        );
    }
}

export default HoverCounterTwo;