import React from 'react';

//Destructing in Functional Component 

// const Greet = (props) => {
//     return (
//         <> 
//             <h1>my name is {props.name} and favourite movie is {props.movie}</h1>
//         </>
//     )
// }

//1st way
// const Greet = ({name, movie}) => {
//     return (
//         <> 
//             <h1>my name is {name} and favourite movie is {movie}</h1>
//         </>
//     )
// }

//2nd way

const Greet = props => {
    let {name, movie} = props;
    return (
        <> 
            <h1>my name is {name} and favourite movie is {movie}</h1>
        </>
    )
}

export default Greet;