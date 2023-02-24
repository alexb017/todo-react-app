import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nabvar from './Components/Navbar.js';
import Todos from './Components/Todos.js';
import Completed from './Components/Completed.js';
import Important from './Components/Important.js';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer.js';

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
  const [theme, setTheme] = useState(
    () => localStorage.getItem('darkTheme') === 'true'
  );

  useEffect(() => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('darkTheme', theme);
    document.body.classList = theme ? 'dark' : 'light';
  }, [theme]);

  function handleDarkThemeClick() {
    setTheme(!theme);
  }

  function handleTodoAdd(newTodo) {
    // check if id exist
    const existingId = todos.find((todo) => todo.id === newTodo.id);

    if (existingId) {
      // increase id
      setTodos([...todos, { ...newTodo, id: newTodo.id + 1 }]);
    } else {
      setTodos([...todos, { ...newTodo }]);
    }
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

  function handleTodoIsImportant(id) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isImportant: !todo.isImportant };
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
          <Nabvar
            todos={todos}
            theme={theme}
            onDarkTheme={handleDarkThemeClick}
          />
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
                    onTodoIsImportant={handleTodoIsImportant}
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
              <Route
                path="/important"
                element={
                  <Important
                    todos={todos}
                    onTodoIsImportant={handleTodoIsImportant}
                    onTodoIsCompleted={handleTodoIsCompleted}
                    onTodoDelete={handleTodoDelete}
                  />
                }
              ></Route>
            </Routes>
          </div>
          <Footer />
        </main>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
