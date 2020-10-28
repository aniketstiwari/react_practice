import React, { Component } from 'react';
import WithCounter from './WithCounter';

//Places where you need to share common functionality without repeating coding code you need
// HIgher order function
class HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
               <h2 onMouseOver={incrementCount}> Hovered 
               {count} times</h2> 
            </div>
        );
    }
}

export default WithCounter(HoverCounter, 2);