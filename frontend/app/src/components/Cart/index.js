import React from 'react';

const checkout = (props) => {
    
}

export const Cart = (props) => <ul>
        {
            props.items.map((el, i) => <li key={i}>
                { JSON.stringify({el}) }
            </li>)
        }
        <button onClick={( () => props.send("CHECKOUT") )}>
            checkout
        </button>
</ul>