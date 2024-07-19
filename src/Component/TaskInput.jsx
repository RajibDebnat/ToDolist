import { func } from "prop-types";
import React, { useState } from "react";

function TaskInput({ onAdd, onDelete }) {
  const [taskInput, setTaskInput] = useState();

  function handleInput(event) {
    setTaskInput(event.target.value);
  }
  function handleTaskSubmit() {
    if (taskInput.trim() === "") {
      return;
    }
    onAdd(taskInput);
    setTaskInput("");
  }

  return (
    <div className="  flex items-center gap-4 my-4">
      <input
        onChange={handleInput}
        value={taskInput}
        type=" text"
        className=" w-64 px-2 py-1  bg-stone-200 rounded-xl "
      />
      <button
        onClick={handleTaskSubmit}
        className=" bg-orange-400 px-2 py-1 rounded-xl font-semibold"
      >
        + Add Task
      </button>
    </div>
  );
}

export default TaskInput;
