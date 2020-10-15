import React from 'react';
import './MyStyle.css';

function StyleSheet(props) {
    let primaryClass = props.enabled ? 'primary' : '';
    return(
        <div>
            {/* <h1 className="primary font-xl">Hello</h1> */}
            <h1 className={`${primaryClass} font-xl`}>Hello</h1>
        </div>
    )
}

export default StyleSheet