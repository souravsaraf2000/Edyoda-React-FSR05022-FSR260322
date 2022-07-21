import React from 'react'
// import propTypes from 'prop-types'

function Home({getData}) {
  return (
    // <h1>a for {a}</h1>
    <button onClick={getData}>Get Data</button>
  )
}

// Home.propTypes = {
//     a: propTypes.oneOfType([propTypes.number, propTypes.string])
// }

export default Home