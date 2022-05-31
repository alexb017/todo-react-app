export default function TodoForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label htmlFor="todo">Enter name of todo:</label>
      <input
        type="text"
        id="todo"
        value={props.name}
        onChange={props.onNameChange}
      />
    </form>
  );
}
