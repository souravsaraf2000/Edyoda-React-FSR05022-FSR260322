import React from 'react'

class Home extends React.Component {
    render() { 
        const {name, org , updateValue} = this.props
        // console.log(this.props)
        return (
            <div>
                <h1>Home Component {name}, {org}</h1>
                <button onClick={()=>updateValue(5)}>Update</button>
            </div>
        );
    }
}
 
export default Home;