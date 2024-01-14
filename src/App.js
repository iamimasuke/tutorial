import { useState, useRef } from "react";
import TodoList from "./TodoList.js";
import {v4 as uuidv4} from 'uuid'


function App() {

const[todos, setTodos] = useState([
  {id: 1 ,name: "Todo1", completed: false},
]);

const todoNameRef = useRef();

const handleAddTodo = () => {
  const name = todoNameRef.current.value;
  if (name === "") return;
  setTodos((prevTodos) => {
    return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
  });  
  todoNameRef.current.value = null;
}

const ToggleTodo = (id) => {
  const newTodos = [...todos];
  const todo = newTodos.find((todo) => todo.id === id);
  todo.completed= !todo.completed;
  setTodos(newTodos);
}

const handleDeleteTodo = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
}

  return (
    <div>
    <TodoList todos={todos} ToggleTodo={ToggleTodo}/> 
    <input type="text" ref={todoNameRef}/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleDeleteTodo}>Completed Todo</button> 
    <p>残りのタスク:{todos.filter((todo) => !todo.completed).length}</p>
    </div>
  );
}

export default App;
