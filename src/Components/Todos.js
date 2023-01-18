import { useEffect, useState } from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

export default function Todos(props) {
  const [entry, setEntry] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [date, setDate] = useState('');

  console.log(props);

  function handleEntryChange(event) {
    console.log(event.target.value);
    setEntry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props.onTodoAdd({ id: props.todos.length + 1, entry, isCompleted });
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
            todos={props.todos}
            entry={entry}
            onEntryChange={handleEntryChange}
            onFormSubmit={handleFormSubmit}
            onPressEnter={handlePressEnter}
          />
        </div>
        <div className="todos-grid">
          {props.todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                details={todo}
                onTodoDelete={props.onTodoDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
