function Task({ task, onDeleteTask, onToggleTask }) {
  const getDisplayDate = (date) => {
    const dueDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const isSameDay = (d1, d2) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    if (isSameDay(dueDate, today))
      return (
        <span
          style={{
            color: "#2F46DB",
            backgroundColor: "#E8F4FF",
            border: "1px solid #E8F4FF",
            borderRadius: "5px",
            padding: "6px 6px",
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
          Today
        </span>
      );
    if (isSameDay(dueDate, tomorrow))
      return (
        <span
          style={{
            color: "#D86C01",
            backgroundColor: "#FFF7E3",
            border: "1px solid #FFF7E3",
            borderRadius: "5px",
            padding: "6px 6px",
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
          Tomorrow
        </span>
      );

    const [weekday, month, day] = dueDate.toDateString().split(" ");
    return (
      <span
        style={{
          color: "#367812",
          backgroundColor: "#E4FFE4",
          border: "1px solid #E4FFE4",
          borderRadius: "5px",
          padding: "6px 6px",
          fontWeight: "500",
          fontSize: "15px",
        }}
      >
        {weekday}, {day} {month}
      </span>
    );
  };

  return (
    <li
      style={{
        marginBottom: "10px",
        padding: "12px 10px",
        width: "707px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...(task.done
          ? {
              backgroundColor: "#F8F8F8",
              border: "1px solid #F8F8F8",
              borderRadius: "6px",
            }
          : {}),
      }}
    >
      <div>
        <input
          type="checkbox"
          value={task.done}
          onChange={() => {
            onToggleTask(task.id);
          }}
          style={{
            transform: "scale(1.5)",
            marginRight: "10px",
            cursor: "pointer",
            accentColor: "black",
          }}
        />
        <span
          style={{
            fontSize: "15px",
            ...(task.done
              ? { textDecoration: "line-through", color: "grey" }
              : {}),
          }}
        >
          {task.taskName}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span>{getDisplayDate(task.dueDate)}</span>
        <button
          onClick={() => onDeleteTask(task.id)}
          style={{
            background: "none",
            border: "none",
            padding: "2px 2px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

export default Task;
