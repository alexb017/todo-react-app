import { useState } from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);

    if (e.target.value) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, name]);
    setBtnDisabled(true);
    setName('');
  }

  function handleDeleteCLick(i) {
    setTodos(todos.filter((todo, index) => index !== i));
  }

  function handleClearInputClick(e) {
    setBtnDisabled(true);
    setName('');
  }

  return (
    <div className="container">
      <div className="content">
        <div className="form-content">
          <TodoForm
            name={name}
            btnDisabled={btnDisabled}
            onNameChange={handleNameChange}
            onFormSubmit={handleFormSubmit}
            onClearInputClick={handleClearInputClick}
          />
        </div>
        <div className="list-content">
          <TodoList todos={todos} onDeleteClick={handleDeleteCLick} />
        </div>
      </div>
    </div>
  );
}
