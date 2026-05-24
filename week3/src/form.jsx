import { useState } from "react";

function Form({ onAddTask }) {
  const FormStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "20px",
  };

  const [taskName, setTaskName] = useState(""); // set empty string
  const [dueDate, setDueDate] = useState(""); // set empty date string

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskName || !dueDate) return;

    const newTask = { taskName, dueDate, done: false, id: Date.now() };
    onAddTask(newTask);

    setTaskName("");
    setDueDate("");
  }

  return (
    <form style={FormStyle} onSubmit={handleSubmit}>
      <div
        className="task-name"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "0px",
        }}
      >
        <h4
          style={{ fontSize: "15px", fontWeight: "600", marginBottom: "15px" }}
        >
          What do you want to do?
        </h4>
        <input
          type="text"
          placeholder="Study for mid exams..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
          style={{
            height: "40px",
            width: "340px",
            padding: "0px 15px",
            border: "1px solid #EBEBEB",
            borderRadius: "6px",
            color: "#511d1d",
          }}
        />
      </div>
      <div
        className="task-due"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "0px",
        }}
      >
        <h4
          style={{ fontSize: "15px", fontWeight: "600", marginBottom: "15px" }}
        >
          When should it be done?
        </h4>
        <input
          type="date"
          // placeholder="Monday, 25th April 2025"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          style={{
            height: "40px",
            width: "230px",
            padding: "0px 15px",
            border: "1px solid #EBEBEB",
            borderRadius: "6px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          border: "1px solid #0C51FF",
          borderRadius: "6px",
          padding: "10px 15px",
          backgroundColor: "#0C51FF",
          color: "white",
          marginTop: "50px",
          width: "80px",
        }}
      >
        Create
      </button>
    </form>
  );
}

export default Form;
