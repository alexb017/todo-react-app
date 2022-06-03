export default function TodoForm(props) {
  return (
    <form className="form" onSubmit={props.onFormSubmit}>
      <textarea
        id="todo"
        rows="2"
        className="input"
        placeholder="Task name here..."
        value={props.name}
        onChange={props.onNameChange}
      />
      <div className="form-options">
        <select className="select">
          <option value="">Category</option>
          <option value="work">Work</option>
        </select>
        <button
          type="submit"
          className="btn-submit"
          disabled={props.btnDisabled}
        >
          <strong>Add task</strong>
        </button>
      </div>
      {/* props.isInputEmpty && (
            <button
              type="button"
              className="btn-input-clear"
              onClick={props.onClearInputClick}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"></path>
              </svg>
            </button>
          ) */}
    </form>
  );
}
