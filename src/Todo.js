import React from 'react'


const Todo = ({todo, ToggleTodo}) => {
    const handleTodoClick = () => {
        ToggleTodo (todo.id);
    };


  return <div>
    <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange = {handleTodoClick} />   
        </label>

        {todo.name}</div>;
};


export default Todo