import { useState } from "react";
import TaskList from "./taskList";

function Accordion({ label, tasks, onDeleteTask, onToggleTask }) {
  const AccordionStyle = {
    marginTop: "40px",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={AccordionStyle}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <button
          type="button"
          style={{
            width: "24px",
            height: "24px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            border: "0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {isOpen ? "-" : "+"}
        </button>
        <span style={{ fontWeight: "700" }}> 🗓️ {label}</span>
        <span
          style={{
            marginLeft: "15px",
            backgroundColor: "pink",
            border: "1px solid pink",
            borderRadius: "5px",
            padding: "3px 8px",
            fontWeight: "500",
          }}
        >
          {tasks.length}{" "}
        </span>
      </div>
      {isOpen && (
        <TaskList
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
        />
      )}
    </div>
  );
}

export default Accordion;
