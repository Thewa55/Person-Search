import React from 'react'
import './card.css'

export const Card = (props)=>{
    console.log(props.user.login.salt)
    return (    
        <div key={props.user.login.salt} className='card-container'> 
            <h1>Name: {props.user.name.first}</h1>
                {/* <div>
                    <h2>Information:</h2>
                    <a href={employee.website} rel='noreferrer' target='_blank'>{employee.website}</a>
                    <p>Phone number: {employee.phone}</p>
                    <p>User Name: {employee.username}</p>
                </div>
                <div>
                    <h2>Address:</h2>
                    <p>{employee.address.street}</p>
                    <p>{employee.address.suite}</p>
                    <p>{employee.address.city}, {employee.address.zipcode}</p>
                </div>
                <div>
                    <h2>Company:</h2>
                    <p>{employee.company.name}</p>
                    <p>{employee.company.bs}</p>
                    <p>{employee.company.catchPhrase}, {employee.address.zipcode}</p>
                </div> */}
        </div>
    )
}