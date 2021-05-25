import React from "react";
import './modal.css'

export const Modal = (props) => {

  const onClose= (e) => {props.onClose()}

  return (
    <>
        {!props.show ? 
            (
                <div></div>
            ):(
                <div className='Modal'>
                    <h2>Modal Window</h2>
                    <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
                    <div class="actions">
                        <button onClick={onClose} class="toggle-button">Close Modal</button>
                    </div>
                </div>
            )
        }
    </>
  )
}