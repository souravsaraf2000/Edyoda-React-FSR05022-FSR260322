import './App.css';
import React from 'react';
import Home from './components/Home/Home'

class App extends React.Component{

  state = {
    val: 0
  }

  // decrementCounter = () => {
  //   this.setState({
  //     val : this.state.val - 1
  //   })
  // }

  // incrementCounter = () => {
  //   this.setState({
  //     val : this.state.val + 1
  //   })
  // }

  // resetCounter = () => {
  //   this.setState({
  //     val : 0
  //   })
  // }

  updateValue = (x) => {
    this.setState({
      val: this.state.val + x
    }, ()=>{console.log('I am new state ', this.state)})
    console.log(this.state)
  }

  render(){
    return (
      <div>
        {/* <Home name={'Sourav'} org={'Edyoda'} /> */}
        <h2>{this.state.val}</h2>
        <Home updateValue = {this.updateValue}/>
      </div>
    )
  }
}

export default App;