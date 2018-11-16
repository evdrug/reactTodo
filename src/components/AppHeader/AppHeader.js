import React from "react";
import "./AppHeader.css"
const AppHeader = ({name, toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>{name}</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;