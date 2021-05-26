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
                    <form>
                        <input type='text' placeholder='Name'></input>
                        <input type='email' placeholder='E-mail'></input>
                        <input type='telephone' placeholder='Cell'></input>
                        <input type='text' placeholder='Address'></input>                    
                        <div class="actions">
                            <button type='submit'>Submit</button>
                            <button onClick={onClose} class="toggle-button">Close Modal</button>
                        </div>
                    </form>
                </div>
            )
        }
    </>
  )
}