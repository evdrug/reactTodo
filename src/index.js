import React from "react";
import ReactDom from "react-dom";

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPannel from './components/SearchPannel/SearchPannel';


const App = () =>{
    const items = ['Learn React!!!', 'Build Awesome App'];

    return (
        <div>
            <span>{(new Date()).toString()}</span>
            <AppHeader name={"My Todo List"} />
            <SearchPannel />
            <TodoList items={items}/>
        </div>
    );
};

ReactDom.render(<App />,
    document.getElementById('root'));