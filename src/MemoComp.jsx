import React from 'react';

//PureComponent is a class based component. Whereas memo is for functional based Component

function MemoComp({name}) {
    console.log("Rendering Memo Component")
    return <>
        <div>{name}</div>
    </>
}

export default React.memo(MemoComp);