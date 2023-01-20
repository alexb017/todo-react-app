import Todo from './Todo';

export default function Completed(props) {
  const { todos } = props;
  console.log(todos);
  return (
    <>
      <div className="completed-content">
        <h2>&#10004; Completed tasks</h2>
        {todos.map((todo, index) => {
          if (todo.isCompleted) {
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
