export default function Completed({ todos }) {
  return (
    <>
      <div className="completed-content">
        <h2>Completed tasks</h2>
        {todos.length === 0 && <p>You have not completed any task.</p>}
      </div>
    </>
  );
}
