import { useState } from "react";
import Header from "./header";
import Form from "./form";
import Accordion from "./accordion";

function App() {
  const appStyle = {
    fontFamily: "'Inter', 'sans-serif'",
    padding: "40px 120px",
  };

  const [tasks, setTasks] = useState([]); // set empty array

  const todayStr = new Date().toLocaleDateString("en-CA");
  //   const tomorrowDate = new Date();
  //   tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  //   const tomorrowStr = tomorrowDate.toLocaleDateString("en-CA");

  //   let labelText = "";
  //   let labelColor = "";
  //   let textColor = "";

  //   if (tasks.dueDate === today) {
  //     labelText = "Today";
  //     labelColor = "#E8F2FF"; 
  //     textColor = "#4A90E2";
  //   } else if (tasks.due === tomorrowStr) {
  //     labelText = "Tomorrow";
  //     labelColor = "#FFF4E5"; 
  //     textColor = "#FF9900";
  //   } else {
  //     labelText = new Date(tasks.due).toLocaleDateString("en-GB", {
  //       weekday: "short",
  //       day: "numeric",
  //       month: "short",
  //     });
  //     labelColor = "#E9F9EF"; 
  //     textColor = "#27AE60";
  //   }

  const todayTasks = tasks.filter((t) => t.dueDate === todayStr); // today accordion
  const upcomingTasks = tasks.filter((t) => t.dueDate > todayStr); // other accordion
  //   const overdueTasks = tasks.filter((t) => t.dueDate < todayStr); // remove task

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <div style={appStyle}>
      <Header />
      <Form onAddTask={handleAddTask} />
      <Accordion
        label="Today"
        tasks={todayTasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <Accordion
        label="Other"
        tasks={upcomingTasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
}

export default App;
