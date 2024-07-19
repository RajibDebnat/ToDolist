import React from 'react';
import Task from './Task';
function SelectedProject({ project ,onDeleteProject, onDeleteTask
 , onAddTask,tasks}) {
  console.log(project)
  console.log(project.date)
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className=" uppercase text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
          onClick={onDeleteProject}
            className=" bg-red-500 text-white px-2 py-1 rounded-xl  hover:bg-red-600 transition-colors duration-500"
          >
            Delete
          </button>
        </div>
        <p  className='   mb-4 text-stone-400'>{formattedDate}</p>
        <p className= ' text-stone-600   whitespace-pre-wrap  font-semibold text-xl first-letter:uppercase'>{project.description}</p>
      </header>
      {/* <p></p> */}
      <Task tasks={tasks} onAdd = {onAddTask} onDelete={onDeleteTask}/>
    </div>
  );
}

export default SelectedProject;
