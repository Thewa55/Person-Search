import React, {useRef} from "react";
import './modal.css'

export const Modal = (props) => {

  const cellRef = useRef()
  const emailRef= useRef()
  const fullnameRef= useRef()
  const addressRef = useRef()
  const onClose= (e) => {props.onClose()}
  const newPerson = (e)=> { 
    e.preventDefault()
    let newPerson = {
        cell: cellRef.current.value,
        email: emailRef.current.value,
        name: {
            first: fullnameRef.current.value
        },
        location: {
            street: {
                name: addressRef.current.value
            }
        }
    }
    console.log(newPerson);
  }

  return (
    <>
        {!props.show ? 
            (
                <div></div>
            ):(
                <div className='Modal'>
                    <h2>Modal Window</h2>
                    <form>
                        <input type='text' placeholder='Name' ref={fullnameRef}></input>
                        <input type='email' placeholder='E-mail' ref={emailRef}></input>
                        <input type='telephone' placeholder='Cell' ref={cellRef}></input>
                        <input type='text' placeholder='Address'ref={addressRef}></input>                    
                        <div class="actions">
                            <button type='submit' onClick={newPerson}>Submit</button>
                            <button onClick={onClose} class="toggle-button">Close Modal</button>
                        </div>
                    </form>
                </div>
            )
        }
    </>
  )
}