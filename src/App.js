import React from "react";
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPannel from './components/SearchPannel';
import FilterPannel from './components/FilterPannel'
import "./App.css"

const App = () =>{
    const items = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader name={"My Todo List"} toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPannel />
                <FilterPannel />
            </div>
            <TodoList items={items}/>
        </div>
    );
};

export default App;