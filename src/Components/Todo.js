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

    if (details.isCompleted) return;

    if (!details.isImportant) {
      toast.success('Task selected as important!');
    } else {
      toast.success('Task not important!');
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
          <p className="todo-date">
            {details.date ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"></path>
                </svg>
                {details.date}
              </>
            ) : (
              ''
            )}
          </p>
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
