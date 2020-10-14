import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedin: true
        }
    }

    render() {
        // return(
        //     <>
        //         <h1>Hello aniket</h1>
        //          <h1>Heelow tiwari</h1>
        //     </>
        // )

        //1st approach

        //If else don't work inside jsx but there are workarounds
        // if(this.state.isLoggedin){
        //     return(
        //         <h1>Hello aniket</h1>
        //     )
        // }else{
        //     return(
        //         <h1>Hellow tiwari</h1>
        //     )
        // }

        //2nd approach using condition variable

        // let message;
        // if(this.state.isLoggedin){
        //     message = <div>Welcome aniket</div>;
        // }else{
        //     message = <div>Welcome tiwari</div>;
        // }
        // return(
        //     <div>{message}</div>
        // )

        //3rd approach ternary operator

        // let message = this.state.isLoggedin ? 'aniket' : 'tiwari';
        // return(
        //     <h1>Hellow {message}</h1>
        // )

        // return (
        //     this.state.isLoggedin ? <div>Welcome aniket</div> : <div>Welcome tiwari</div>
        // )

        //4th apprach short circuit operator

        return this.state.isLoggedin && <div>Welcome aniket</div>

    }
}


export default UserGreeting;