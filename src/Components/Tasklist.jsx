import React from "react";

export default function Tasklist({
  tasks,
  updateTask,
  deleteTask,
}) {
  const toggleComplete = (index) => {
  const updatedTask = {
    ...tasks[index],
    completed: !tasks[index].completed,
  };

  updateTask(index, updatedTask);
};
  
  if (tasks.length === 0) {
    return <h3>No Tasks Available</h3>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <h4
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </h4>

            <p>
              {task.priority} | {task.category}
            </p>
          </div>

          <div>
            <button
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              className="delete"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}