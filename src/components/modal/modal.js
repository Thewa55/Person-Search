import React, {useRef} from "react";
import './modal.css'

export const Modal = (props) => {

  const cellRef = useRef()
  const emailRef= useRef()
  const fullnameRef= useRef()
  const addressRef = useRef()
  const stateRef= useRef()
  const cityRef = useRef()
  const zipRef= useRef()
  const idRef= useRef()

  const onClose= (e) => {props.onClose()}
  const newPerson = (e)=> { 
    e.preventDefault()
    let newPerson = {
        picture: { large: ''},
        cell: cellRef.current.value,
        email: emailRef.current.value,
        name: {
            first: fullnameRef.current.value
        },
        address: addressRef.current.value,
        location: {
            city: cityRef.current.value,
            state: stateRef.current.value,
            postcode: zipRef.current.value
        },
        login: {
            salt: idRef.current.value
        }
    }
    // console.log(newPerson);
    props.createPerson(newPerson)
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
                        <input type='text' placeholder='City' ref={cityRef}></input>
                        <input type='text' placeholder='State'ref={stateRef}></input>   
                        <input type='text' placeholder='Zip Code'ref={zipRef}></input>
                        <input type='text' placeholder='ID'ref={idRef}></input>                    
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