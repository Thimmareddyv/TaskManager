import React from "react";

export default function ProgressTracker({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="progress-container">
      <h3>
        Progress: {completed} / {total}
      </h3>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{progress.toFixed(0)}% Completed</p>
    </div>
  );
}