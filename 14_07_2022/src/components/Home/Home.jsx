import React from 'react'

class Home extends React.Component {

    render() { 
        console.log('Child Componenent Called')
        return (
            <div>
                <h1>Home Component</h1>
                <button onClick={()=>this.props.decrementValue('home')}> - </button> {this.props.val} <button onClick={()=>this.props.incrementValue('home')}> + </button>
            </div>
        );
    }
}
 
export default Home;