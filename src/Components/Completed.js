export default function Completed({ todos }) {
  return (
    <>
      <div className="completed-content">
        <h2>&#10004; Completed tasks</h2>
        {!todos.isCompleted && <p>You have not completed any task.</p>}
      </div>
    </>
  );
}
