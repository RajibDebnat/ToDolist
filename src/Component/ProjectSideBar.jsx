import React from "react";
import Button from "./Button";
import DeleteIcon from "../assets/bin.webp";
function ProjectSideBar({ onCreateProject, projects }) {
  return (
    <aside className=" overflow-scroll bg-slate-900 text-slate-100 w-1/3 rounded-r-xl  px-8 py-16 md:w-72">
      <h2 className=" mb-8 font-bold  uppercase  md:text-xl    text-slate-300">
        Your Projects
      </h2>
      <div className="">
        <Button onCreateProject={onCreateProject}>+ Add Project</Button>
      </div>
      <ul className=" flex flex-col gap-3  my-6  ">
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className=" flex justify-between hover:bg-stone-100 bg-white cursor-pointer p-1 rounded-xl first-letter:uppercase  font-semibold"
            >
              <button className="first-letter:uppercase text-stone-800  font-semibold">
                {project.title}
              </button>{" "}
              <span>
                <img  className={"w-6 h-6 " }src={DeleteIcon} alt="delete" />
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSideBar;
