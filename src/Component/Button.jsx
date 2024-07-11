import React from "react";

function Button({onCreateProject,children}) {
  return (
    <div className="">
      <button onClick={onCreateProject} className=" px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-100 transition-all duration-300">
       {children}
      </button>
    </div>
  );
}

export default Button;
