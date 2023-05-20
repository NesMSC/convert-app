import React from "react";

const Modal = ({ children, show, handleShow }) => {

  return(
        <div 
            aria-labelledby="modal-title" role="dialog" aria-modal="true"
            className={`fixed inset-0 flex items-center justify-center ${show ? '' : 'hidden'}`}
        >
            <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
            <div className="w-3/4 h-3/4 inset-1 z-10 bg-white rounded-lg shadow-lg px-4 transition duration-300 ease-out transform">
                <div className="w-full h-1/5 flex justify-end items-start">
                    <button type="button" onClick={handleShow}>x</button>
                </div>
                <div className="w-full overflow-y-scroll">
                    { children }
                </div>
            </div>  
        </div>
    );
};

export default Modal;