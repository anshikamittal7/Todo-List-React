import React from "react";

const Task = ({ title, description, index, deleteTask }) => {
  return (
    <div className="task_container">
      <div className="data">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <button
        className="dltbtn"
        type="submit"
        onClick={() => deleteTask(index)}
      >
        -
      </button>
    </div>
  );
};

export default Task;
