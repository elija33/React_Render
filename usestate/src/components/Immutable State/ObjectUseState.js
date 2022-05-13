import React, { useState } from 'react'

const initialState = {
    fname: 'James',
    lname: 'Wayne'
}

export const ObjectUseState = () => {

    const [person, setPerson] = useState(initialState)

    const changeName = () => {
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'Kent'
        setPerson(person)
    }

    console.log('ObjectUseState Render')
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
