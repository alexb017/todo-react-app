import Todo from './Todo';

export default function Important(props) {
  const { todos } = props;
  return (
    <>
      <div className="important-content">
        <h2>⭐️ Important</h2>
        {todos
          .filter((todo) => todo.isImportant)
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
