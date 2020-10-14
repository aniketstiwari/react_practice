import React from 'react';
import Person from './Person';

function NameList() {
    //const names = ['apple', 'banana', 'grapes'];
    // return(
    //     <>
    //         <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //     </>
    // )
    
    // 1st way
    
    // return(
    //     <>
    //         {/* {
    //             names.map((val, index) => {
    //             return <h1>{val}</h1>
    //           })
    //         } */}
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </>
    // )

    //2nd way

    // const nameList = names.map(name => <h2>{name}</h2>);
    // return(<>{nameList}</>)

    ////////////////////////////////////////////////////////////

    const persons = [
        {
            id: 1,
            name: 'aniket',
            skill: 'ruby'
        },
        {
            id: 2,
            name: 'shivam',
            skill: 'python'
        },
        {
            id: 3,
            name: 'tiwari',
            skill: 'javascript'
        }
    ]
    //Note Key props are not accessible in child components
    //THe purpose of key help react to identify which component has changed, added or removed
    //and plays a crucial role while doing UI update
    const personsList = persons.map((person, index) => <Person key={index} name={person.name} skill={person.skill}/>);
    return(<>{personsList}</>)

}

export default NameList;