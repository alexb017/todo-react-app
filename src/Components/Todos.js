import { useEffect, useState } from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

export default function Todos() {
  const [todos, setTodos] = useState(() => {
    let saveTodos = [];
    try {
      saveTodos = JSON.parse(localStorage.getItem('todos')) || [];
    } catch (error) {
      saveTodos = [];
    }
    return saveTodos;
  });
  const [entry, setEntry] = useState('');

  useEffect(() => {
    console.log(todos);
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  function handleEntryChange(event) {
    console.log(event.target.value);
    setEntry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { entry }]);
    setEntry('');
  }

  function handlePressEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit(event);
    }
  }

  return (
    <>
      <div className="todos-content">
        <h2>My tasks</h2>
        <p className="task-date">Monday, January 16</p>
        <div className="todo-input">
          <TodoForm
            entry={entry}
            onEntryChange={handleEntryChange}
            onFormSubmit={handleFormSubmit}
            onPressEnter={handlePressEnter}
          />
        </div>
        <div className="todos-grid">
          {todos.map((todo, index) => {
            return <Todo key={index} details={todo} />;
          })}
        </div>
      </div>
    </>
  );
}
