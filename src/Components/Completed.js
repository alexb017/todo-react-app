import Todo from './Todo.js';

export default function Completed(props) {
  const { todos } = props;
  return (
    <>
      <div className="completed-content">
        <h2>Completed tasks</h2>
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
