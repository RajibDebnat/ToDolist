import React from "react";
import { forwardRef } from "react";
const Input = forwardRef( function ({ label, textArea, ...props },ref) {
  return (
    <p className=" flex flex-col gap-1 my-4">
      <label className=" text-sm font-bold uppercase  text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea
          ref={ref} className="  focus:outline-none w-full p-1 focus:bg-slate-100  rounded-xl  border-b-2 border-stone-300"
          {...props}
        />
      ) : (
        <input ref={ref} className=" w-full p-1 focus:outline-none  focus:bg-slate-100  rounded-xl  border-b-2 border-stone-300" {...props} />
      )}
    </p>
  );
})

export default Input;
