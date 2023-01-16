import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nabvar from './Components/Navbar.js';
import Todos from './Components/Todos.js';
import Completed from './Components/Completed.js';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="main">
          <Nabvar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Todos />}></Route>
              <Route path="/completed" element={<Completed />}></Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
