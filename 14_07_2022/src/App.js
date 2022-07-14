import './App.css';
import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About';

class App extends React.PureComponent{

  constructor(){
    super();
    // this.state = {
    //   appCounterData: { val: 0 },
    //   homeCounterData: { val: 0 },
    //   aboutCounterData: { val: 0 }
    // }
    // this.state = {
    //   itemName : '',
    //   todoItems : []
    // }
    this.state = {
      val: 0
    }
  }

  // incrementValue = (component) => {
  //   if(component === 'app'){
  //     this.setState((prevState)=>{
  //       return {
  //         appCounterData : {
  //           val: prevState.appCounterData.val + 1
  //         }
  //       }
  //     })
  //   }
  //   else if(component === 'home'){
  //     this.setState((prevState)=>{
  //       return {
  //         homeCounterData : {
  //           val: prevState.homeCounterData.val + 1
  //         }
  //       }
  //     })
  //   }
  //   else{
  //     this.setState((prevState)=>{
  //       return {
  //         aboutCounterData : {
  //           val: prevState.aboutCounterData.val + 1
  //         }
  //       }
  //     })
  //   }
  // }

  // decrementValue = (component) => {
  //   if(component === 'app'){
  //     this.setState((prevState)=>{
  //       return {
  //         appCounterData : {
  //           val: prevState.appCounterData.val - 1
  //         }
  //       }
  //     })
  //   }
  //   else if(component === 'home'){
  //     this.setState((prevState)=>{
  //       return {
  //         homeCounterData : {
  //           val: prevState.homeCounterData.val - 1
  //         }
  //       }
  //     })
  //   }
  //   else{
  //     this.setState((prevState)=>{
  //       return {
  //         aboutCounterData : {
  //           val: prevState.aboutCounterData.val - 1
  //         }
  //       }
  //     })
  //   }
  // }

  // getItemName = (e) => {
  //   this.setState({
  //     itemName: e.target.value
  //   },()=>console.log(this.state))
  // }

  // addItemsToList = () => {
  //   let todoItemsCopy = [...this.state.todoItems]
  //   todoItemsCopy.push(this.state.itemName)
  //   this.setState({
  //     itemName: '',
  //     todoItems : todoItemsCopy
  //   })
  // }

  // deleteItem = (index) => {
  //   let todoItemsCopy = [...this.state.todoItems]
  //   todoItemsCopy.splice(index,1)
  //   this.setState({
  //     todoItems : todoItemsCopy
  //   })
  // }

  // updateItem = (e, index) => {
  //   let todoItemsCopy = [...this.state.todoItems]
  //   todoItemsCopy.splice(index,1, e.target.value)
  //   this.setState({
  //     todoItems : todoItemsCopy
  //   })
  // }

  update = () => {
    this.setState((prevState)=>{
      return {val: prevState.val + 1}
    })
  }

  render(){
    console.log('Render Called')
    // return (
    //   // <div>
    //   //   {/* <h1>App Component</h1>
    //   //   <button onClick={()=>this.decrementValue('app')}> - </button> {this.state.appCounterData.val} <button onClick={()=>this.incrementValue('app')}> + </button>
    //   //   <Home 
    //   //     val = {this.state.homeCounterData.val}
    //   //     incrementValue = {this.incrementValue}
    //   //     decrementValue = {this.decrementValue}
    //   //   />
    //   //   <About 
    //   //     val = {this.state.aboutCounterData.val}
    //   //     incrementValue = {this.incrementValue}
    //   //     decrementValue = {this.decrementValue}
    //   //   /> */}

    //   //   <h1>Todo App</h1>
    //   //   <input 
    //   //     placeholder='Enter task' 
    //   //     onChange = {this.getItemName}
    //   //     value = {this.state.itemName}
    //   //   />
    //   //   <button onClick = {this.addItemsToList}>Add to list</button>
    //   //   {
    //   //     this.state.todoItems.map((item, index) => 
    //   //       <div>
    //   //         <span>{index+1}. {item}</span> 
    //   //         <input 
    //   //           placeholder='Type here to update item'
    //   //           onChange = {(e)=>this.updateItem(e,index)}
    //   //         />
    //   //         <button onClick={()=>this.deleteItem(index)}>Delete Item</button>
    //   //       </div>
    //   //     )
    //   //   }
    //   //   <h2>State: {JSON.stringify(this.state)}</h2>
    //   // </div>
    // )
    return(
      <div>
        <h1>{this.state.val}</h1>
        <button onClick = {this.update}>Update</button>
      </div>
    )
  }
}

export default App;