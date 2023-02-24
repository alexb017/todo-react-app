import { useState } from 'react';
import moment from 'moment';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

export default function Todos(props) {
  const [entry, setEntry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');

  const todayDate = new Date();
  const todayDateFormat = moment(todayDate).format('dddd, MMMM D');

  function handleDateChange(event) {
    setIsOpen(!isOpen);

    const formattedDate = moment(event).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'ddd, MMM D',
    });

    setStartDate(event);
    setDate(formattedDate);
  }

  function handleDateClick(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleEntryChange(event) {
    setEntry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (entry) {
      props.onTodoAdd({
        id: props.todos.length + 1,
        entry,
        date,
        isCompleted: false,
        isImportant: false,
      });
    }

    setEntry('');
    setDate('');
    setStartDate(new Date());
  }

  function handlePressEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleFormSubmit(event);
    }
  }

  return (
    <>
      <div className="todos-content">
        <h2>
          <svg
            className="svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.803a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.747V9.944c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.803c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.5c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692Z" />
          </svg>
          Tasks
        </h2>
        <p className="task-date">{todayDateFormat}</p>
        <div className="todo-input">
          <TodoForm
            todos={props.todos}
            entry={entry}
            onEntryChange={handleEntryChange}
            onFormSubmit={handleFormSubmit}
            onPressEnter={handlePressEnter}
            startDate={startDate}
            isOpen={isOpen}
            date={date}
            onDateChange={handleDateChange}
            onDateClick={handleDateClick}
          />
        </div>
        <div className="todos-grid">
          {props.todos
            .filter((todo) => !todo.isCompleted)
            .map((todo, index) => {
              return (
                <Todo
                  key={index}
                  details={todo}
                  onTodoIsCompleted={props.onTodoIsCompleted}
                  onTodoDelete={props.onTodoDelete}
                  startDate={startDate}
                  onTodoIsImportant={props.onTodoIsImportant}
                />
              );
            })}
        </div>
        <div className="completed-content">
          <h2>
            <svg
              className="svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.401 3.378a.75.75 0 0 0-1.023-.28c-2.269 1.297-3.391 2.954-3.921 4.71-.468 1.553-.463 3.166-.458 4.543l.001.4v5.688l-3.72-3.72a.75.75 0 1 0-1.06 1.061l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0-1.06-1.06l-3.72 3.72v-6.07c-.004-1.411-.007-2.802.393-4.128.42-1.394 1.298-2.737 3.23-3.84a.75.75 0 0 0 .278-1.024Z" />
            </svg>
            Completed
          </h2>
          {props.todos
            .filter((todo) => todo.isCompleted)
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
      </div>
    </>
  );
}
