import React from "react";
export const Modal = (props) => {

  return (
    <>
        {!props.show ? 
            (
                <div></div>
            ):(
                <div>Hello Modal</div>
            )
        }
    </>
  )
}