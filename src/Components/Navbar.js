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
            <Button>Dark mode</Button>
            {/* <Button className="btn-small">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"></path>
                </svg>
              </Button> */}
          </li>
        </ul>
      </nav>
    </>
  );
}
