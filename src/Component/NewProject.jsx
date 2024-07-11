import React from "react";
import Input from "./Input";
import { useRef } from "react";
function NewProject({ onCancleProject,onSubmitData }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const onSubmit = () => {
    const allData = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    };
    console.log(allData)
    onSubmitData(allData)
    title.current.value ='';
    description.current.value ='';
    date.current.value ='';
  };
  return (
    <div className=" shadow-lg bg-white w-[35rem]  mt-16 p-8 rounded-xl">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button onClick={onSubmit} className=" bg-orange-400 font-semibold px-3 py-1 rounded-xl hover:bg-orange-500  transform transition-all duration-300 ">
            Save
          </button>
        </li>
        <li>
          <button
            onClick={onCancleProject}
            className=" bg-violet-300 font-semibold px-3 py-1 rounded-xl hover:bg-violet-400  transform transition-all duration-300 "
          >
            Cancle
          </button>
        </li>
      </menu>
      <div className="">
        <Input ref={title} label={"Title"} />
        <Input ref={description} label={"Description"} textArea={true} />
        <Input ref={date} label={"Due Date"} type={"date"} />
      </div>
    </div>
  );
}

export default NewProject;
