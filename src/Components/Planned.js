import Todo from './Todo.js';

export default function Planned(props) {
    const { todos } = props;

    const planned = props.todos.reduce(
        (total, todo) => {
            return total + todo.date !== '' ? 1 : 0
        }, 0);
    return (
        <>
            <div className="planned-content">
                <h2 className="h2-count h2-planned">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                        <path fill="#10b981" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45Z" /></svg>
                    Planned tasks
                    {planned > 0 ? (
                        <span className="span-count">{planned}</span>
                    ) : (
                        ''
                    )}
                </h2>
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