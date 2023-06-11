import Todo from './Todo.js';

export default function Planned(props) {
    const { todos } = props;

    return (
        <>
            <div className="planned-content">
                <h2>Planned tasks</h2>
                {todos.filter(todo => todo.date !== '').map((todo, index) => {
                    return (
                        <Todo
                            key={index}
                            details={todo}
                            onTodoIsImportant={props.onTodoIsImportant}
                            onTodoIsCompleted={props.onTodoIsCompleted}
                            onTodoDelete={props.onTodoDelete}
                        />
                    );
                })}
            </div>
        </>
    );
}