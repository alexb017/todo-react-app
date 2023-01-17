import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nabvar from './Components/Navbar.js';
import Todos from './Components/Todos.js';
import Completed from './Components/Completed.js';
import Important from './Components/Important.js';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    let saveTodos = [];
    try {
      saveTodos = JSON.parse(localStorage.getItem('todos')) || [];
    } catch (error) {
      saveTodos = [];
    }
    return saveTodos;
  });

  useEffect(() => {
    console.log(todos);
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  function handleTodoAdd(newTodo) {
    setTodos([...todos, { ...newTodo }]);
  }

  return (
    <>
      <BrowserRouter>
        <main className="main">
          <Nabvar />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Todos todos={todos} onTodoAdd={handleTodoAdd} />}
              ></Route>
              <Route
                path="/completed"
                element={<Completed todos={todos} />}
              ></Route>
              <Route path="/important" element={<Important />}></Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
