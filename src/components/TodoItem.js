import React from "react";
import "./component-style.css"


function TodoItem(props) {
    console.log(props)
    return (
    <div className="todo-item">
        <input type="checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p>
    </div>
    )
}

export default TodoItem