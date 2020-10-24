import React, { Component } from 'react';

// Forwarding Refs is a technique for automatically passing a ref through
   // a component to one of its children

// function FRInput() {
//     return <>
//         <input type="text"/>
//     </>
// }

//forwardRef takes functional component as a parameter
// Below arrow function is passed as a paramater to forwardRef method
//Below ref attribute will point to the parent component
//
const FRInput = React.forwardRef((props, ref) => {
    return <>
        <input type="text" ref={ref}/>
    </>
}) 

export default FRInput;