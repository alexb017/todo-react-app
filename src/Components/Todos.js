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
        <h2>📝 Tasks</h2>
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
          <h2>🎉 Completed</h2>
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
