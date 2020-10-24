import React, { Component } from 'react';
import FRInput from './FRinput';

class FRParentInput extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        //Since we are using forward ref technique this.inputref points to the native
        //element instead of FRIinput
        this.inputRef.current.focus()
    }   

    render() {
        return <>
           <FRInput ref={this.inputRef} />
           <button onClick={this.clickHandler}>Focus Input</button>
        </>
    }
}

export default FRParentInput;