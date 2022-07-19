import React from 'react';
import About from './About';
import axios from 'axios'
import './App.css';
import Home from './Home';

class App extends React.Component {
  state = {
    showAbout: true
  }
  componentDidMount(){
    // let data_1 = {
    //   title: 's-chand'
    // }

    // let options = {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type':'application/json'
    //   },
    //   body: JSON.stringify(data_1)
    // }
    
    // axios.delete('https://dummyjson.com/products/1')
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
    // fetch('https://dummyjson.com/products/1', options)
    // .then(res=>res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
  }
  render(){
    return (
      <div className="App">
        {/* {
          this.state.showAbout ? <About/> : ''
        }
        <button onClick = {
          ()=> {
            this.setState({
              showAbout: !this.state.showAbout
            })
          }
        }>
          {
            this.state.showAbout ? 'unmount' : 'mount'
          }
        </button> */}
        <Home/>
      </div>
    );
  }
}

export default App;
