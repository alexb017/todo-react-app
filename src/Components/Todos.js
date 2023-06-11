import { useState } from 'react';
import moment from 'moment';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import Button from './Button.js';

export default function Todos(props) {
  const [entry, setEntry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

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

  const completedCount = props.todos.reduce(
    (total, todo) => total + todo.isCompleted,
    0
  );

  const totalTodos = props.todos.reduce(
    (total, todo) => total + !todo.isCompleted,
    0
  );

  return (
    <>
      <div className="todos-content">
        <h2 className="h2-count">
          <svg
            className="svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.803a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.5a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.747V9.944c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.803c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.5c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V9.944a.75.75 0 0 0-.267-.573l-6.75-5.692Z" />
          </svg>
          Tasks{' '}
          {totalTodos > 0 ? (
            <span className="span-count">{totalTodos}</span>
          ) : (
            ''
          )}
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
          {completedCount > 0 ? (
            <Button className="completed-count-btn" onClick={() => setShowCompleted(!showCompleted)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z" /></svg>
              Completed <span className="span-count">{completedCount}</span>
            </Button>) : ''}
          {showCompleted && props.todos
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
