import { render } from '@testing-library/react';
import React from 'react';

function ChildComponent(props) {
    return(
        <div>
            {/* If you just want to parent class method you can directly call
             the prop with () */}
            {/* <button onClick={props.handler}>Parent</button> */}
            {/* But if you want to call a parent method with arguments you need to use
            arrow function */}
            { <button onClick={() => props.handler('child')}>Parent</button> }
        </div>
    )
}

export default ChildComponent;