import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nabvar from './Components/Navbar.js';
import Todos from './Components/Todos.js';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <Nabvar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Todos />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
