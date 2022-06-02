export default function TodoForm(props) {
  return (
    <form className="form" onSubmit={props.onFormSubmit}>
      <label htmlFor="todo" className="label">
        Enter name of todo:
      </label>
      <input
        type="text"
        id="todo"
        className="input"
        placeholder="Add new todo"
        value={props.name}
        onChange={props.onNameChange}
      />
    </form>
  );
}
