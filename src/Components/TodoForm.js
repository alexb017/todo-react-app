import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './Input.js';
import Button from './Button.js';

export default function TodoForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmitForm}>
        <div className="form-search">
          <div className="form-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" />
            </svg>
          </div>
          <div className="form-input">
            <Input
              placeholder="Add a task"
              className="input-text"
              value={props.entry}
              onChange={props.onEntryChange}
              onKeyDown={props.onPressEnter}
              required
            />
          </div>
          <div className="form-date">
            {props.entry.length > 0 && (
              <>
                <span>{props.date}</span>
                <Button className="btn-date" onClick={props.onDateClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45Z" /></svg>
                </Button>
              </>
            )}
            {props.isOpen && (
              <DatePicker
                selected={props.startDate}
                onChange={props.onDateChange}
                inline
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
}
