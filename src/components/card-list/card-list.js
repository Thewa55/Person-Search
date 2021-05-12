import React from 'react'
import { Card } from '../card/card.js'
import './card-list.css'

export const CardList = (props) => {

    let usersList = props.users.results
    console.log(usersList)
    return (
        <div className='card-list'>
            { usersList ? (
                <>
                    {usersList.map(user =>
                        <Card key={user.login.salt}user={user}/>
                    )}
                </>
            ) : (
                <div> No users yet </div>
            )
            }
        </div>
    )
}