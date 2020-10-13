//Event Handler

import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
      super(props)
      this.state = {
          message: 'hello'
      }
    //  this.changeMessage = this.changeMessage.bind(this);
    }

    // changeMessage() {
    //     this.setState({
    //         message: 'changed'
    //     })
    // }

    ////approach 4
    changeMessage = () => {
        this.setState({
            message: 'changed'
        })
    }

    render() {
        return(
            <>
                <h1>{this.state.message}</h1>
                {/* 1st approach events doesn work directly with setState. Inorder to do 
                it you can add bind it but it will be bad for performance */}
                {/* <button onClick={this.changeMessage.bind(this)}>Click Me</button> */}
                {/*2nd approach using arrow function but still it gives peformance impact*/}
                {/* <button onClick={() => this.changeMessage()}>Click Me</button> */}
                {/* 3nd appraoch using binding at constructor level which is prefered*/}
                <button onClick={this.changeMessage}>Click Me</button>
            </>
        )
    }
}

export default EventBind;
