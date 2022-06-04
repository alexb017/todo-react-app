import { useState, useEffect } from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [isSelected, setSelected] = useEffect('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function handleNameChange(e) {
    setName(e.target.value);

    if (e.target.value) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { name, category }]);
    setBtnDisabled(true);
    setName('');
    setCategory('');
  }

  function handleDeleteCLick(i) {
    setTodos(todos.filter((todo, index) => index !== i));
  }

  function handleClearInputClick(e) {
    setBtnDisabled(true);
    setName('');
  }

  function onEnterPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleFormSubmit(e);
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="form-content">
          <TodoForm
            name={name}
            category={category}
            btnDisabled={btnDisabled}
            onNameChange={handleNameChange}
            onCategoryChange={handleCategoryChange}
            onFormSubmit={handleFormSubmit}
            onEnterPress={onEnterPress}
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
