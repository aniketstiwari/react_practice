import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends Component {

    static contextType = UserContext;

    render() {
        return (
            <div>
                hellow this is {this.context}
                <ComponentF/>
            </div>
        );
    }
}

//ComponentE.contextType = UserContext;// this line can also be replaced with the
// static line above

export default ComponentE;