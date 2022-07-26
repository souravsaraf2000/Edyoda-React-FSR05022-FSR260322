import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>App Component Name:{props.name} Age: {props.age}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App);
