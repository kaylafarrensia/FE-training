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
        <span style={{ fontSize: "15px", fontWeight: "700" }}> 🗓️ {label}</span>
        <span
          style={{
            marginLeft: "15px",
            backgroundColor: "#F6F6F6",
            border: "1px solid #F6F6F6",
            borderRadius: "5px",
            padding: "2px 6px",
            fontWeight: "500",
            fontSize: "14px",
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
