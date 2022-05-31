import { useState } from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, name]);
    setName('');
  }

  function handleDeleteCLick(i) {
    setTodos(todos.filter((todo, index) => index !== i));
  }

  return (
    <>
      <TodoForm
        name={name}
        onNameChange={handleNameChange}
        onFormSubmit={handleFormSubmit}
      />
      <TodoList todos={todos} onDeleteClick={handleDeleteCLick} />
    </>
  );
}
