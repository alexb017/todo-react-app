import Todo from './Todo';

export default function Important(props) {
  const { todos } = props;

  const importantCount = props.todos.reduce(
    (total, todo) => {
      return total + todo.isImportant ? 1 : 0
    }, 0);

  return (
    <>
      <div className="important-content">
        <h2 className="h2-count h2-important">
          <svg
            className="svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Zm1.21.936L9.74 8.615a1.35 1.35 0 0 1-1.016.738l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.03 4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.374-.862-5.029a1.35 1.35 0 0 1 .388-1.195l3.654-3.562-5.05-.734a1.35 1.35 0 0 1-1.016-.738l-2.259-4.576Z" />
          </svg>
          Important
          {importantCount > 0 ? (
            <span className="span-count">{importantCount}</span>
          ) : (
            ''
          )}
        </h2>
        {todos
          .filter((todo) => !todo.isCompleted && todo.isImportant)
          .map((todo, index) => {
            return (
              <Todo
                key={index}
                details={todo}
                onTodoIsCompleted={props.onTodoIsCompleted}
                onTodoDelete={props.onTodoDelete}
                onTodoIsImportant={props.onTodoIsImportant}
              />
            );
          })}
      </div>
    </>
  );
}
