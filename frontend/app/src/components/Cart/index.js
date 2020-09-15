import React from 'react';


export const Cart = (props) => <ul>
        {
            props.items.map((el, i) => <li key={i}>
                { JSON.stringify({el}) }
            </li>)
        }
        { props.items.length ?
        <button onClick={( () => props.send("CHECKOUT") )}>
            checkout
        </button>
        : ("You have no items in your cart")
        }
</ul>