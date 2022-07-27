import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Home from './Home';
import Profiles from './Profiles';
import axios from 'axios';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>App Component Name: {props.name} Age: {props.age}</h1>
      <button onClick = {()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> props.changeName(res.data[2].name))
        .catch((err)=>console.log(err))
      }}> Update Name </button>
      <Home/>
      <Profiles />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName : (name) => { dispatch({
        type: 'UPDATE_NAME',
        payload: name
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);