function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <li>
      <input
        type="checkbox"
        value={task.done}
        onChange={() => {
          onToggleTask(task.id);
        }}
      />
      <span style={task.done ? { textDecoration: "line-through" } : {}}>
        {task.taskName}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
    </li>
  );
}

export default Task;
