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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z"></path>
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
              <Button className="btn-small" onClick={props.onDateClick}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z"></path>
                </svg>
              </Button>
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
