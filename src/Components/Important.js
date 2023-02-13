import Todo from './Todo';

export default function Important(props) {
  const { todos } = props;
  return (
    <>
      <div className="important-content">
        <h2>Important tasks</h2>
        {todos.map((todo, index) => {
          if (todo.isImportant) {
            return (
              <Todo
                key={index}
                details={todo}
                onTodoIsCompleted={props.onTodoIsCompleted}
                onTodoDelete={props.onTodoDelete}
              />
            );
          }
        })}
      </div>
    </>
  );
}
