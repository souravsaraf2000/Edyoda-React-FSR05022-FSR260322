import React from 'react'

class About extends React.Component {

    render() {
        return (
            <div>
                <h1>About Component</h1>
                <button onClick={()=>this.props.decrementValue('about')}> - </button> {this.props.val} <button onClick={()=>this.props.incrementValue('about')}> + </button>
            </div>
        );
    }
}
 
export default About;