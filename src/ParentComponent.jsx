import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Parent'
        }
        this.parentMethod = this.parentMethod.bind(this);
    }

    parentMethod(str) {
        console.log(`Hellow ${this.state.name} ${str}`)
    }
    

    render() {
        return(
            <>
                <ChildComponent handler={this.parentMethod}/>    
            </>
        )
    }
}

export default ParentComponent;