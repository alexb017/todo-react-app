import { useState } from 'react';
import moment from 'moment';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';

export default function Todos(props) {
  const [entry, setEntry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const formatedDate = moment(startDate).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'ddd, MMM D',
  });

  const todayDate = new Date();
  const todayDateFormat = moment(todayDate).format('dddd, MMMM D');

  function handleDateChange(event) {
    setIsOpen(!isOpen);
    setStartDate(event);
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
        formatedDate,
        isCompleted: false,
      });
    }
    setEntry('');
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
        <h2>My tasks</h2>
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
            onDateChange={handleDateChange}
            onDateClick={handleDateClick}
          />
        </div>
        <div className="todos-grid">
          {props.todos.map((todo, index) => {
            if (!todo.isCompleted) {
              return (
                <Todo
                  key={index}
                  details={todo}
                  onTodoIsCompleted={props.onTodoIsCompleted}
                  onTodoDelete={props.onTodoDelete}
                  startDate={startDate}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
