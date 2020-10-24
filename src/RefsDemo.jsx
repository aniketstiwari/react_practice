import React, { Component } from 'react';

//Refs  make it possible to access DOM nodes directly within React
// TO fetch the input values using ref

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        //2nd approach to create Ref it is an older approach
        this.cbref = null;
        this.setcbref = (element) => {
            this.cbref = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbref) {
            this.cbref.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return <>
            <input type="text" ref={this.inputRef} />
            <input type="text" ref={this.setcbref} />
            <button onClick={this.clickHandler}>Click me</button>
        </>
    }
}

export default RefsDemo;