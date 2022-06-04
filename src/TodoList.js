export default function TodoList(props) {
  return (
    <ul className="todos-list">
      {props.todos.map((todo, index) => (
        <li className="todo-li" key={index}>
          <div className="todo-li-content">
            <div className="todo-text">
              <p className="p-name">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4Z"></path>
                </svg>

                {todo.name}
              </p>
              <p className="p-category">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.5 19L4.5 18.99C3.39932 18.99 2.5055 18.1007 2.5 17V7C2.5055 5.89934 3.39932 5.00999 4.5 5.01L15.5 5C16.1472 4.99975 16.7546 5.31274 17.13 5.84L21.5 12L17.13 18.16C16.7546 18.6873 16.1472 19.0002 15.5 19ZM4.5 7V17H15.5L19.05 12L15.5 7H4.5Z"></path>
                </svg>
                {todo.category}
              </p>
            </div>
            <button
              type="button"
              className="btn-delete"
              onClick={() => props.onDeleteClick(index)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9ZM15 18H13V9H15V18ZM11 18H9V9H11V18Z"></path>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
