import React from 'react'
import './card.css'

export const Card = (props)=>{
    console.log(props.user.login.salt)
    return (    
        <div key={props.user.login.salt} className='card-container'> 
            <img src={props.user.picture.large} alt='portrait'/>
            <h1>Name: {props.user.name.first}</h1>
            <p>E-mail: {props.user.email}</p>
            <p>Cell: {props.user.cell}</p>
        </div>
    )
}