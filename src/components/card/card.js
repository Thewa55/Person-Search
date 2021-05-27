import React from 'react'
import './card.css'

export const Card = (props)=>{
    let person = props.user
    return (    
        <div key={person.login.salt} className='card-container'> 
            {person.picture.large ?  <img src={person.picture.large} alt='portrait'/> : <></> }
            <h4><strong>Name:</strong> {person.name.first}</h4>
            <p><strong>E-mail:</strong> {person.email}</p>
            <p><strong>Cell:</strong> {person.cell}</p>
            <p><strong>Address:</strong> {person.address}</p>
            <p className='data'>{person.location.city}, {person.location.state} {person.location.postcode}</p>
        </div>
    )
}