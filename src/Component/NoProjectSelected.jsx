import React from "react";
import noprojectImg from "../assets/no-projects.png";
import Button from "./Button";
function NoProjectSelected({onCreateProject}) {
  return (
    <div className=" mt-24 text-center  w-2/3">
      <img className=" object-contain  w-24 h-24 mx-auto" src={noprojectImg} alt="an empty task list" />
      <h2 className=" text-xl text-stone-500 font-bold my-4">No Project Selected</h2>
      <p className=" text-stone-500 font-bold mb-4">Select a Project or Get Started with a New One</p>
      <Button  onCreateProject={onCreateProject}>Create New Project</Button>
    </div>
  );
}

export default NoProjectSelected;
