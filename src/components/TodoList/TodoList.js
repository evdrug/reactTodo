import React from "react";
import TodoItem from "./TodoItem"
import "./TodoList.css"
const TodoList = (props) => {
    const listItems = props.items.map((item) => {
        const { id, ...itemProps } = item;
        return  <TodoItem key={id} {...itemProps}/>;
    });
    return (
        <ul className="list-group todo-list">
            {listItems}
        </ul>
    );
};

export default TodoList;