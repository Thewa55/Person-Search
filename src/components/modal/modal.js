import React from "react";
export const Modal = (props) => {

  const onClose= (e) => {props.onClose()}

  return (
    <>
        {!props.show ? 
            (
                <div></div>
            ):(
                <div>Hello Modal
                    <button onClick={onClose}>Close Modal</button>
                </div>
            )
        }
    </>
  )
}