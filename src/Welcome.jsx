//Destructing in class component

import React, { Component } from 'react';

class Welcome extends Component {
    
    render() {
        const {name, movie} = this.props;
        return(
            <div>My name is {name} and my favourit movie is {movie}</div>
        )
    }
}

export default Welcome;