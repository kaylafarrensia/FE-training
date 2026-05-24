import Task from "./task";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
  );

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "10px 0 0 25px",
        }}
      >
        {sortedTasks.map((task) => (
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
