import React from 'react'
import { connect } from 'react-redux'

function Home(props) {

    console.log(props)
  return (
    <div>Home Component</div>
  )
}

const mapStateToProps = (state) => {
    return state
  }


export default connect(mapStateToProps)(Home)