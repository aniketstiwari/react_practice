import React, { Component } from 'react';

//Refs  make it possible to access DOM nodes directly within React
// TO fetch the input values using ref

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return <>
            <input type="text" ref={this.inputRef} />
            <button onClick={this.clickHandler}>Click me</button>
        </>
    }
}

export default RefsDemo;