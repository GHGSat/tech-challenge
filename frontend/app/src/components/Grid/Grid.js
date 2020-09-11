import React from 'react'
import "./Grid.css"


export const Grid = (props) => {
    return <div className="grid">
        {props.children}
    </div>
}
