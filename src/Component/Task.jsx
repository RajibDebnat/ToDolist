import React from "react";
import TaskInput from "./TaskInput";

function Task({ tasks, onAdd, onDelete }) {
  return (
    <section className=" bg-transparent p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Task</h2>
      <TaskInput onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="text-gray-600">
          This project does not have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && <ul className="mt-4 space-y-2">
        {tasks.map(task=>{
          return<li className=" flex  justify-between text-stone-600 font-semibold text-lg" key={task.taskId}><span>{task.text} </span>
          <button onClick={()=>onDelete(task.taskId)} className=" bg-red-500 text-white text-[16px] font-normal cursor-pointer hover:bg-red-600 px-2 py-[2px] rounded-xl">Clear</button></li>
        })}
        
        </ul>}
    </section>
  );
}

export default Task;
