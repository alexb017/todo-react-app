import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [entry, setEntry] = useState('');

  function handleEntryChange(event) {
    console.log(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { entry }]);
  }

  return (
    <>
      <div className="todos-content">
        <h2>My tasks</h2>
        <p className="task-date">Monday, January 16</p>
        <div className="todo-input">
          <TodoForm />
        </div>
        <div className="todos-grid">
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                details={todo}
                onHandleEntryChange={handleEntryChange}
                onHandleFormSubmit={handleFormSubmit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
