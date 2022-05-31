export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button type="button" onClick={() => props.onDeleteClick(index)}>
            Delete todo
          </button>
        </li>
      ))}
    </ul>
  );
}
