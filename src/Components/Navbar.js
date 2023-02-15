import { NavLink } from 'react-router-dom';
import Button from './Button';
import { toast } from 'react-hot-toast';

export default function Navbar(props) {
  const completedCount = props.todos.reduce(
    (total, todo) => total + todo.isCompleted,
    0
  );

  const importantCount = props.todos.reduce(
    (total, todo) => total + todo.isImportant,
    0
  );

  function darkTheme() {
    props.onDarkTheme();

    if (!props.theme) {
      toast('Dark Mode', {
        icon: '🌙',
        style: {
          borderRadius: '8px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      toast('Light Mode', {
        icon: '🌕',
        style: {
          borderRadius: '8px',
          background: '#eee',
          color: '#333',
        },
      });
    }
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <h1>📘 To Do App</h1>
          <ul>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                📝 Tasks {completedCount === 0 ? '' : `(${completedCount})`}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/important"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                ⭐️ Important{' '}
                {importantCount === 0 ? '' : `(${importantCount})`}
              </NavLink>
            </li>
            <li className="nav-item">
              <Button className="btn-mediu" onClick={darkTheme}>
                🌗 Dark Mode
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
