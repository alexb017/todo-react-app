import { NavLink } from 'react-router-dom';
import Button from './Button';

export default function Navbar(props) {
  const completedCount = props.todos.reduce(
    (total, todo) => total + todo.isCompleted,
    0
  );

  const importantCount = props.todos.reduce(
    (total, todo) => total + todo.isImportant,
    0
  );
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <h1>To Do App</h1>
          <ul>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Tasks {completedCount === 0 ? '' : `(${completedCount})`}
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/completed"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Completed
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                to="/important"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Important {importantCount === 0 ? '' : `(${importantCount})`}
              </NavLink>
            </li>
            <li className="nav-item">
              <Button className="btn-mediu" onClick={props.onDarkTheme}>
                Dark Mode
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
