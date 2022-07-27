import React from 'react'
import { connect } from 'react-redux'

function Home(props) {

    console.log(props)
  return (
    <div>
      <h1>Home Component name: {props.name} age: {props.age}</h1>
      <button onClick = {()=>props.changeAge(45)}> Update Age</button>
      <button onClick={()=>props.updateYear(2022)}>Pass Year to Profiles</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return state
  }

const mapDispatchToProps = (dispatch) => {
  return {
    changeAge : (age) => dispatch({
      type: 'UPDATE_AGE',
      payload: age
    }),
    updateYear : (year) => dispatch({
      type: 'PROVIDE_YEAR',
      payload: year
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)