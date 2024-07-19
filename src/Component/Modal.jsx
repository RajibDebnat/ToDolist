import React from "react";
import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, forwardRef } from "react";

const Modal = forwardRef(function ({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="  backdrop:bg-stone-900/80  w-80 h-50  rounded-xl" ref={dialog}>
        <div className=" p-4">

      {children}   
      <form method="dialog">
        <button
          className="  mx-auto bg-violet-500 px-6 py-2 font-bold  text-white rounded-xl"
          type="submit"
          >
          Cancle
        </button>
      </form>
            </div>
    </dialog>,

    document.getElementById("modal-root")
  );
});

export default Modal;
