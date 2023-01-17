import { NavLink } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1>Personal To Do</h1>
        <ul>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Tasks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/completed"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Completed
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/important"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Important
            </NavLink>
          </li>
          <li className="nav-item">
            <Button>Dark mode</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
