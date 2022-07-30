import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetailDisplay() {
    const param = useParams()
    console.log(param)
  return (
    <>
        <h1> Name is : {param.userName} </h1>
        <h1> Email is : {param.userEmail} </h1>
    </>
  )
}

export default UserDetailDisplay