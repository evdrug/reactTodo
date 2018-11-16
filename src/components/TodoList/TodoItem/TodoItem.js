import React from "react";
import "./TodoItem.css"
const TodoItem = (props) => <li className="list-group-item todo-list-item">{props.item}</li>;

export default TodoItem;