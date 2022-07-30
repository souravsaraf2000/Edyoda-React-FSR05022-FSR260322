import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

function UserDetails() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formSubmit, setFormSubmit] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault()
    }
    const params = useParams()
    console.log(params)
  return (
    <div>
        <form onSubmit={(e)=>submitHandler(e)}>
            <input type='text' placeholder='Enter name' name='name' onChange={(e)=>setName(e.target.value)}/>
            <input type='email' placeholder='Enter Email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder = 'Enter Password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type = 'submit' value = 'Submit' onClick={()=>setFormSubmit(true)}/>
        </form>
        {
            formSubmit && <Navigate to={`/user/${name}/${email}`}/>
        }
    </div>
  )
}

export default UserDetails