import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
    //Pass ref from parent to child component
    constructor(props) {
        super(props)
        //refs doesn't work with functional component
        this.focusRef = React.createRef()
    }

    clickHandler = () => {
        this.focusRef.current.focusInput()
    }

    render() {
        return <>
           <Input ref={this.focusRef} />
           <button onClick={this.clickHandler}>Focus Input</button>

        </>
    }
}

export default FocusInput;