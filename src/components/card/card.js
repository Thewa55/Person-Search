import React from 'react'
import './card.css'

export const Card = (props)=>{
    console.log(props.user.login.salt)
    let person = props.user
    return (    
        <div key={person.login.salt} className='card-container'> 
            <img src={person.picture.large} alt='portrait'/>
            <h4>Name: {person.name.first}</h4>
            <p>E-mail: {person.email}</p>
            <p>Cell: {person.cell}</p>
            <p>Address: {person.location.street.number} {person.location.street.name}</p>
        </div>
    )
}