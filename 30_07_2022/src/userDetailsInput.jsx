import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function UserDetailsInput() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [submit, setSubmit] = useState(false)

  return (
    <>
        <form onSubmit={handleSubmit}>
           <div> <input type="text" name="name" id="" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} /></div>
           <div> <input type="email" name="email" id="" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /> </div>
           <div><input type="password" name="password" id="" placeholder='Enter Password' onChange={(e)=>setPwd(e.target.value)}/></div>
           <div> <input type="submit" value="Submit" onClick={()=>setSubmit(true)}/></div>
        </form>
        {
            submit && <Navigate to={`/user/${name}/${email}`}/>
        }
    </>
  )
}

export default UserDetailsInput