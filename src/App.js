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

  function handleTodoIsCompleted(id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updateTodos);
  }

  function handleTodoDelete(id) {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
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
                element={
                  <Todos
                    todos={todos}
                    onTodoAdd={handleTodoAdd}
                    onTodoDelete={handleTodoDelete}
                    onTodoIsCompleted={handleTodoIsCompleted}
                  />
                }
              ></Route>
              <Route
                path="/completed"
                element={
                  <Completed
                    todos={todos}
                    onTodoIsCompleted={handleTodoIsCompleted}
                    onTodoDelete={handleTodoDelete}
                  />
                }
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
