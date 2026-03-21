import Task from "./task";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "10px 0 0 25px",
        }}
      >
        {tasks.map((task) => (
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
