import { React, useEffect, useState } from "react";

import Task from "./Task";
import "../App.css";

function Home() {
  const initArr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title) {
      setTasks([...tasks, { title, description }]);
    }
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, idx) => {
      return idx !== index;
    });
    setTasks(filteredArr);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <h1>DAILY GOALS</h1>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="desc"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button className="add" type="submit">
            ADD
          </button>
        </form>
        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
