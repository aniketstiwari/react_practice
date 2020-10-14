import React from 'react';

function Person(props){
    return(
        <h2>I am {props.name}  and my skills is {props.skill}</h2>
    )
}

export default Person;