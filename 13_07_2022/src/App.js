import './App.css';
import React from 'react';
import axios from 'axios'
import Home from './components/Home/Home'

/*

state updated -> shouldComponentUpdate -> render

*/

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      val: 10 // Prev State
    }
  }

  // componentDidMount(){
  //   // axios.get('https://jsonplaceholder.typicode.com/users')
  //   // .then((res)=>{
  //   //   console.log(res.data)
  //   // })
  //   // .catch((err)=>console.log(err))
  //   console.log('Componenent Did Mount Called')
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(`Should Component Update called, prevState : ${this.state.val} nextState : ${nextState.val}`)
  //   if(this.state.val !== nextState.val){
  //     return true
  //   }
  //   else{
  //     return false
  //   }
  // }

  updateVal = () => {
    this.setState({
      val: 20 // Next State
    })
  }

  render(){
    console.log('Render Called')
    return (
      <div>
        <h2>{this.state.val}</h2>
        <Home data = {this.state.val}/>
        <button onClick={this.updateVal}>Update</button>
      </div>
    )
  }
}

export default App;