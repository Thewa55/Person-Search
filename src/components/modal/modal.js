import React, {useRef, useEffect, useState} from "react";
import './modal.css'

export const Modal = (props) => {
  
  const [disabled, setDisabled] = useState(true)
  const cellRef = useRef()
  const emailRef= useRef()
  const fullnameRef= useRef()
  const addressRef = useRef()
  const stateRef= useRef()
  const cityRef = useRef()
  const zipRef= useRef()
  const idRef= useRef()
  const [errorMessage, setErrorMessage] = useState ({
    Cell: '',
    Email: '',
    Name: '',
    Address: '',
    City: '',
    State: '',
    Zip: '',
    Id: ''})

  useEffect(() => {console.log(errorMessage)}, [errorMessage])
  const onClose= (e) => {props.onClose()};

  const inputValidation = (e) => {
    console.log('Input Validation')
    const fieldName = e.target.name
    if(e.target.value === ''){
        setErrorMessage(prevState => ({...prevState, [fieldName]: `${fieldName} is required`}))
    }
  }  
  
  const onChange = (e) => {
    let fieldName = e.target.name
    setErrorMessage(prevState => ({ ...prevState, [fieldName]: ''}))
    if(fullnameRef.current.value !== '' && addressRef.current.value !== '' && cellRef.current.value !== '' && emailRef.current.value !== ''&& cellRef.current.value !== '' && stateRef.current.value !== ''&& idRef.current.value !== ''&& zipRef.current.value !== ''){
        setDisabled(false)
    } else {
        setDisabled(true)
    }

  }

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
                    {/* <div className='Errorsdiv'>
                        { errorArr.length > 0 ? (errorArr.map(error => ( <div className='Error'>{error}</div>))): (<div></div>) } 
                    </div> */}
                    <form>
                        <div>
                            <input type='text' name='Name' placeholder='Name' onBlur={inputValidation} ref={fullnameRef} onChange={onChange}></input> 
                            {errorMessage.Name !== '' ? (<div className='Error'>{errorMessage.Name}</div>) : null }
                        </div>
                        <div>
                            <input type='email' name='Email' placeholder='E-mail' onBlur={inputValidation} ref={emailRef} onChange={onChange}></input>
                            {errorMessage.Email !== '' ? (<div className='Error'>{errorMessage.Email}</div>) : null }
                        </div>
                        <div>
                            <input type='telephone' name='Cell' placeholder='Cell' onBlur={inputValidation} ref={cellRef} onChange={onChange}></input>
                            {errorMessage.Cell !== '' ? (<div className='Error'>{errorMessage.Cell}</div>) : null }
                        </div>
                        <div>
                            <input type='text' name='Address' placeholder='Address' onBlur={inputValidation} ref={addressRef} onChange={onChange}></input>
                            {errorMessage.Address !== '' ? (<div className='Error'>{errorMessage.Address}</div>) : null }
                        </div>
                        <div>    
                            <input type='text' name='City' placeholder='City' onBlur={inputValidation} ref={cityRef} onChange={onChange}></input>
                            {errorMessage.City !== '' ? (<div className='Error'>{errorMessage.City}</div>) : null }
                        </div>
                        <div>
                            <input type='text' name='State' placeholder='State' onBlur={inputValidation} ref={stateRef} onChange={onChange}></input>
                            {errorMessage.State !== '' ? (<div className='Error'>{errorMessage.State}</div>) : null }
                        </div> 
                        <div>  
                            <input type='text' name='Zip' placeholder='Zip Code' onBlur={inputValidation} ref={zipRef} onChange={onChange}></input>
                            {errorMessage.Zip !== '' ? (<div className='Error'>{errorMessage.Zip}</div>) : null }
                        </div>
                        <div>
                            <input type='text' name='Id' placeholder='ID' onBlur={inputValidation} ref={idRef} onChange={onChange}></input>
                            {errorMessage.Id !== '' ? (<div className='Error'>{errorMessage.Id}</div>) : null }
                        </div>                    
                        <div className="actions">
                            <button type='submit' disabled={disabled} onClick={newPerson} id='submit'>Submit</button>
                            <button onClick={onClose} className="toggle-button">Cancel</button>
                        </div>
                    </form>
                </div>
            )
        }
    </>
  )
}