import React from "react";
import TodoItem from "./TodoItem/TodoItem"
import "./TodoList.css"
const TodoList = (props) => {
    const listItems = props.items.map((item, key) => {
       return  <TodoItem key={key} item={item}/>;
    });
    return (
        <ul className="list-group todo-list">
            {listItems}
        </ul>
    );
};

export default TodoList;