import React from 'react'
import { connect } from 'react-redux'

function Profiles(props) {
  return (
    <div>
        <h1>Profiles Component Year: {props.year}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Profiles)