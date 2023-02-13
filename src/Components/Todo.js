import Input from './Input.js';
import Button from './Button.js';
import toast from 'react-hot-toast';

export default function Todo(props) {
  const { details } = props;

  function todoIsCompleted() {
    props.onTodoIsCompleted(details.id);

    if (!details.isCompleted) {
      toast.success('Task completed!');
    } else {
      toast.success('Task uncompleted!');
    }
  }

  function todoDelete() {
    props.onTodoDelete(details.id);
    toast.success('Task deleted!');
  }

  function todoIsImportant() {
    props.onTodoIsImportant(details.id);

    if (!details.isImportant) {
      toast.success('Task selected as important!');
    } else {
      toast.success('Task');
    }
  }

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
            onClick={todoIsCompleted}
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
          <Button className="btn-delete" onClick={todoDelete}>
            Delete task
          </Button>
          <Button
            className={
              !details.isImportant ? 'btn-important' : 'btn-is-important'
            }
            onClick={todoIsImportant}
          >
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
