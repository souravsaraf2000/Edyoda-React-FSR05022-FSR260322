import React from 'react'

class Home extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        console.log(`Child shouldComponentUpdate called, props = ${this.props.data} nextProps = ${nextProps.data}`)
        if(this.props.data !== nextProps.data){
            return true
        }
        else{
            return false
        }
    }

    render() { 
        console.log('Child Componenent Called')
        const {data} = this.props;
        return (
            <div>
                <h1>Home Component {data}</h1>
            </div>
        );
    }
}
 
export default Home;