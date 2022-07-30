import React from 'react'
import { useParams } from 'react-router-dom'



function About() {

  const params = useParams()
  console.log(params)
  return (
    <h1>About Component</h1>
  )
}

export default About