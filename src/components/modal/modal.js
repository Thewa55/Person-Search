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

  useEffect(() => {console.log(errorArr)}, [errorArr])
  const onClose= (e) => {props.onClose()};

  const newPerson = (e)=> { 
    e.preventDefault()
    setErrorArr([errorArr, ''])
    let errorStore = []
    if(cellRef.current.value === ''){
        errorStore.push('Cell Phone Number Required')
        // setErrorArr([...errorArr, 'Cell Phone Number Required'])
    }
    if(emailRef.current.value === ''){
        errorStore.push('Email required')
        //setErrorArr([...errorArr, 'Email required'])
    } 
    if(fullnameRef.current.value === ''){
        errorStore.push('Name required')
        // errorMessage.fullNameError = 'Name required'
        //setErrorArr([...errorArr, 'Name required'])
    } 
    if (addressRef.current.value === ''){
        errorStore.push('Address required')
        // errorMessage.addressError = 'Address required'
        // setErrorArr([...errorArr, 'Address required'])
    }
    if (cityRef.current.value === ''){
        errorStore.push('City required')
        // errorMessage.cityError = 'City required'
       // setErrorArr([...errorArr, 'City required'])
    }
    if (stateRef.current.value === ''){
        errorStore.push('State required')
        // errorMessage.stateError = 'State required'
        //setErrorArr([...errorArr, 'State required'])
    }
    if (idRef.current.value === ''){
        errorStore.push('ID required')
        // errorMessage.idError = 'ID required'
        // setErrorArr([...errorArr, 'ID required'])
    };
    if(errorStore.length > 0){
        setErrorArr([...errorArr, errorStore])
        // setErrorArr(errorArr.concat(errorStore))
    }
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
                    <div className='Errorsdiv'>
                        { errorArr.length > 0 ? (errorArr.map(error => ( <div className='Error'>{error}</div>))): (<div>No errors</div>) } 
                    </div>
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