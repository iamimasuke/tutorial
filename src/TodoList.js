import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, ToggleTodo}) => {
  return todos.map((todo) => <Todo todo={todo} key = {todo.id} ToggleTodo={ToggleTodo}/>);
};

export default TodoList;