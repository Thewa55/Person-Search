import React, {useRef, useEffect, useState} from "react";
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
  const [errorArr, setErrorArr] = useState([])

  useEffect(() => {}, [errorArr])
  const onClose= (e) => {props.onClose()};

  const newPerson = (e)=> { 
    e.preventDefault()

    if(cellRef.current.value === ''){
        setErrorArr(...errorArr, 'Cell Phone Number Required')
    }
    if(emailRef.current.value === ''){
        setErrorArr(...errorArr, 'Email required')
    } 
    if(fullnameRef.current.value === ''){
        // errorMessage.fullNameError = 'Name required'
        setErrorArr(...errorArr, 'Name required')
    } 
    if (addressRef.current.value === ''){
        // errorMessage.addressError = 'Address required'
        setErrorArr(...errorArr, 'Address required')
    }
    if (cityRef.current.value === ''){
        // errorMessage.cityError = 'City required'
        setErrorArr(...errorArr, 'City required')
    }
    if (stateRef.current.value === ''){
        // errorMessage.stateError = 'State required'
        setErrorArr(...errorArr, 'State required')
    }
    if (idRef.current.value === ''){
        // errorMessage.idError = 'ID required'
        setErrorArr(...errorArr, 'ID required')
    };

    if(!errorArr){
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
                    {/* {errorArr ? (errorArr.forEach(error => { <div className='Error'>{error}</div>})):(<> </>) } */}
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