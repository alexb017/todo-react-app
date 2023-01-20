import Input from './Input';
import Button from './Button';

export default function Todo(props) {
  const { details } = props;
  return (
    <>
      <div className="todo-content">
        <div className="todo-mark">
          <Input
            type="checkbox"
            className={
              !details.isCompleted
                ? 'input-checkbox'
                : 'input-checkbox-completed'
            }
            onClick={() => props.onTodoIsCompleted(details.id)}
          />
        </div>
        <div>
          <p
            className={
              !details.isCompleted ? 'todo-text' : 'todo-text-completed'
            }
          >
            {details.entry}
          </p>
          <p className="todo-date">{details.formatedDate}</p>
        </div>
        <div className="todo-settings">
          <Button
            className="btn-delete"
            onClick={() => props.onTodoDelete(details.id)}
          >
            Delete task
          </Button>
          <Button className="btn-important">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              width="24"
              height="24"
            >
              <defs></defs>
              <polygon points="12 2.78 14.94 8.73 21.5 9.68 16.75 14.31 17.87 20.85 12 17.77 6.13 20.85 7.25 14.31 2.5 9.68 9.06 8.73 12 2.78"></polygon>
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
