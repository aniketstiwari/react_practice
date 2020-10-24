import React from 'react';

function Columns() {
    const items = [];
    return(
        // <div>
        //     <td>Name</td>
        //     <td>Aniket</td>
        // </div>
        <>
        {
            items.map( itme => (
                //we can only pass key in react fragement
                //without short hand notation of react fragement you cannot pass key attribute
                <React.Fragment key={items.id}>
                    <h1>Title</h1>
                    <p>{items.title}</p>
                </React.Fragment>
            ))
        }
            <td>Name</td>
            <td>Aniket</td>
        </>
    )
}

export default Columns;