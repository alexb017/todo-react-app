import { NavLink } from 'react-router-dom';
import Button from './Button';
import { toast } from 'react-hot-toast';

export default function Navbar(props) {
  const totalTodos = props.todos.reduce(
    (total, todo) => total + !todo.isCompleted,
    0
  );

  const importantTask = props.todos.filter(
    (todo) => !todo.isCompleted && todo.isImportant
  );

  const plannedTask = props.todos.filter(
    (todo) => todo.date !== ''
  );

  function darkTheme() {
    props.onDarkTheme();

    if (!props.theme) {
      toast('Dark Mode', {
        icon: '🌙',
        style: {
          borderRadius: '8px',
          background: '#fff',
          color: '#000',
        },
      });
    } else {
      toast('Light Mode', {
        icon: '🌕',
        style: {
          borderRadius: '8px',
          background: '#fff',
          color: '#333',
        },
      });
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="h1">
            <svg
              className="svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.754 22.005a2.25 2.25 0 0 1-2.25-2.25L3.502 5.75a2.25 2.25 0 0 1 2.25-2.25l.747-.001.001-.749a.75.75 0 0 1 .648-.743L7.25 2a.75.75 0 0 1 .743.648L8 2.75v.749H11V2.75a.75.75 0 0 1 .65-.743l.1-.007a.75.75 0 0 1 .744.648l.007.102v.749h2.997l.001-.749a.75.75 0 0 1 .648-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25l.001 11c0 .06-.007.12-.02.176l-.03.094-.045.096-.02.032a.685.685 0 0 1-.105.133l-4.504 4.505a.74.74 0 0 1-.085.073l.085-.073a.744.744 0 0 1-.105.087l-.088.052-.116.047-.114.026-.053.006-.055.002H5.754ZM17.748 5H5.742a.75.75 0 0 0-.74.75l.002 14.004c0 .415.336.75.75.75h8.24l.001-2.254a2.25 2.25 0 0 1 2.096-2.245l.154-.005H18.5V5.75a.75.75 0 0 0-.75-.75Zm-.31 12.5h-1.193a.75.75 0 0 0-.743.648l-.007.102v1.194l1.943-1.944ZM7.25 16h3.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 16h3.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 12h8.998H7.25Zm0-4h8.998a.75.75 0 0 1 .102 1.493l-.102.007H7.25a.75.75 0 0 1-.102-1.493L7.25 8h8.998H7.25Z" />
            </svg>
            To Do App
          </h1>
          <ul>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <svg
                  className="svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#6366f1" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.803a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.747V9.944c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.803c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.5c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692Z" />
                </svg>
                Tasks{' '}
                {totalTodos > 0 ? (
                  <span className="span-count">{totalTodos}</span>
                ) : (
                  ''
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/important"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <svg
                  className="svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#fca5a5" d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Zm1.21.936L9.74 8.615a1.35 1.35 0 0 1-1.016.738l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.03 4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.374-.862-5.029a1.35 1.35 0 0 1 .388-1.195l3.654-3.562-5.05-.734a1.35 1.35 0 0 1-1.016-.738l-2.259-4.576Z" />
                </svg>
                Important{' '}
                {importantTask.length > 0 ? (
                  <span className="span-count">{importantTask.length}</span>
                ) : (
                  ''
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/planned"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                  <path fill="#10b981" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45Z" /></svg>
                Planned{' '}
                {plannedTask.length > 0 ? (
                  <span className="span-count">{plannedTask.length}</span>
                ) : (
                  ''
                )}
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <Button className="btn-dark-mode" onClick={addColorClick('indigo-500')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M224 67.3a35.79 35.79 0 0 0-11.26-25.66c-14-13.28-36.72-12.78-50.62 1.13L142.8 62.2a24 24 0 0 0-33.14.77l-9 9a16 16 0 0 0 0 22.64l2 2.06l-51 51a39.75 39.75 0 0 0-10.53 38l-8 18.41A13.68 13.68 0 0 0 36 219.3a15.92 15.92 0 0 0 17.71 3.35L71.23 215a39.89 39.89 0 0 0 37.06-10.75l51-51l2.06 2.06a16 16 0 0 0 22.62 0l9-9a24 24 0 0 0 .74-33.18l19.75-19.87A35.75 35.75 0 0 0 224 67.3ZM97 193a24 24 0 0 1-24 6a8 8 0 0 0-5.55.31l-18.1 7.91L57 189.41a8 8 0 0 0 .25-5.75A23.88 23.88 0 0 1 63 159l51-51l33.94 34ZM202.13 82l-25.37 25.52a8 8 0 0 0 0 11.3l4.89 4.89a8 8 0 0 1 0 11.32l-9 9L112 83.26l9-9a8 8 0 0 1 11.31 0l4.89 4.89a8 8 0 0 0 11.33 0l24.94-25.09c7.81-7.82 20.5-8.18 28.29-.81a20 20 0 0 1 .39 28.7Z" /></svg>
                Themes
              </Button>
            </li> */}
            <li className="nav-item">
              <Button className="btn-dark-mode" onClick={darkTheme}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.996 19.01a.75.75 0 0 1 .743.649l.007.102v1.5a.75.75 0 0 1-1.493.101l-.007-.101v-1.5a.75.75 0 0 1 .75-.75Zm6.022-2.072 1.06 1.06a.75.75 0 1 1-1.06 1.061l-1.06-1.06a.75.75 0 0 1 1.06-1.061Zm-10.983 0a.75.75 0 0 1 0 1.06L5.974 19.06a.75.75 0 0 1-1.06-1.06l1.06-1.061a.75.75 0 0 1 1.06 0ZM12 6.475a5.525 5.525 0 1 1 0 11.05 5.525 5.525 0 0 1 0-11.05Zm0 1.5a4.025 4.025 0 1 0 0 8.05 4.025 4.025 0 0 0 0-8.05Zm9.25 3.293a.75.75 0 0 1 .102 1.493l-.102.007h-1.5a.75.75 0 0 1-.102-1.493l.102-.007h1.5Zm-17-.029a.75.75 0 0 1 .102 1.494l-.102.006h-1.5a.75.75 0 0 1-.102-1.493l.102-.007h1.5Zm1.64-6.37.084.072 1.06 1.06a.75.75 0 0 1-.976 1.134l-.084-.073-1.06-1.06a.75.75 0 0 1 .976-1.134Zm13.188.072a.75.75 0 0 1 .073.977l-.073.084-1.06 1.06a.75.75 0 0 1-1.133-.976l.072-.084 1.06-1.061a.75.75 0 0 1 1.061 0ZM12 1.99a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.101l-.007-.102v-1.5a.75.75 0 0 1 .75-.75Z" />
                </svg>
                {/* {!props.theme ? 'Switch to Dark Mode' : 'Switch to Light Mode'} */}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
