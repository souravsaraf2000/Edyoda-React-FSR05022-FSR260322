import React from 'react'

function BtnDisplay(props) {

  const {isLoggedIn, updateStatus} = props;
  return (
    <div>
        {
            isLoggedIn ? <button onClick={updateStatus}>Logout</button>:<button onClick={updateStatus}>Login</button>
        }
    </div>
  )
}

export default BtnDisplay