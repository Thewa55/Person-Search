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
//   let errorMessage = {
//     cellError: '',
//     emailError: '',
//     fullNameError: '',
//     addressError: '',
//     cityError: '',
//     stateError: '',
//     zipError: '',
//     idError: ''
//   }
  let errorArr = []
  const onClose= (e) => {props.onClose()}

  const newPerson = (e)=> { 
    e.preventDefault()
    if(cellRef.current.value === ''){
        errorArr.push('Cell Phone Number Required')
    }
    if(emailRef.current.value === ''){
        errorArr.push('Email required')
    } 
    if(fullnameRef.current.value === ''){
        // errorMessage.fullNameError = 'Name required'
        errorArr.push('Name required')
    } 
    if (addressRef.current.value === ''){
        // errorMessage.addressError = 'Address required'
        errorArr.push('Address required')
    }
    if (cityRef.current.value === ''){
        // errorMessage.cityError = 'City required'
        errorArr.push('City required')
    }
    if (stateRef.current.value === ''){
        // errorMessage.stateError = 'State required'
        errorArr.push('State required')
    }
    if (idRef.current.value === ''){
        // errorMessage.idError = 'ID required'
        errorArr.push('ID required')
    }

    console.log(errors)
    if(errorArr.length === 0){
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
        console.log(errorArr)
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
                        <div className="actions">
                            <button type='submit' onClick={newPerson} id='submit'>Submit</button>
                            <button onClick={onClose} className="toggle-button">Close Modal</button>
                        </div>
                    </form>
                </div>
            )
        }
    </>
  )
}