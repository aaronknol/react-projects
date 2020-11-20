import React from 'react';

function Button (props, children) {
    return (
        <button type={props.type} className={props.classes} onClick={props.onClick}>
            {props.children}
        </button> 
    )
}

export default Button;