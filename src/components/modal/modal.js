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
  let errors = false;
  let errorMessage = {
    cellError: '',
    emailError: '',
    fullNameError: '',
    addressError: '',
    cityError: '',
    stateError: '',
    zipError: '',
    idError: ''
  }

  const onClose= (e) => {props.onClose()}

  const newPerson = (e)=> { 
    e.preventDefault()
    if(cellRef.current.value === ''){
        errorMessage.cellError = 'Cell Phone Number Required'
        errors = true
    } else if(emailRef.current.value == null){
        errorMessage.emailError = 'Email required'
        errors = true
    } else if(fullnameRef.current.value == null){
        errorMessage.fullNameError = 'Name required'
        errors = true
    } else if (addressRef.current.value == null){
        errorMessage.addressError = 'Address required'
        errors = true
    } else if (cityRef.current.value == null){
        errorMessage.cityError = 'City required'
        errors = true
    } else if (stateRef.current.value == null){
        errorMessage.stateError = 'State required'
        errors = true
    } else if (idRef.current.value == null){
        errorMessage.idError = 'ID required'
        errors = true
    }

    console.log(errors)
    if(!errors){
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
        props.createPerson(newPerson)
    } else {
        console.log(errorMessage)
    }
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
                        <div>
                            <input type='text' placeholder='Name' ref={fullnameRef}></input>
                        </div>
                        <div>
                            <input type='email' placeholder='E-mail' ref={emailRef}></input>
                        </div>
                        <div>
                            <input type='telephone' placeholder='Cell' ref={cellRef}></input>
                        </div>
                        <div>
                            <input type='text' placeholder='Address'ref={addressRef}></input>
                        </div>
                        <div>    
                            <input type='text' placeholder='City' ref={cityRef}></input>
                        </div>
                        <div>
                            <input type='text' placeholder='State'ref={stateRef}></input>
                        </div> 
                        <div>  
                            <input type='text' placeholder='Zip Code'ref={zipRef}></input>
                        </div>
                        <div>
                            <input type='text' placeholder='ID'ref={idRef}></input>
                        </div>                    
                        <div class="actions">
                            <button type='submit' onClick={newPerson} id='submit'>Submit</button>
                            <button onClick={onClose} class="toggle-button">Close Modal</button>
                        </div>
                    </form>
                </div>
            )
        }
    </>
  )
}