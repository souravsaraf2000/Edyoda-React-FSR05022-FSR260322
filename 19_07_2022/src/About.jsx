import React from 'react'
import axios from 'axios'

class About extends React.Component {

    componentDidMount(){
        // axios.get('https://dummyjson.com/users')
        // .then(res => localStorage.setItem('users', JSON.stringify(res.data)))
        // .catch(err => console.log(err));
        // fetch('https://dummyjson.com/users')
        // .then(res => res.json())
        // .then(users => localStorage.setItem('users', JSON.stringify(users.users)))
        // .catch(err => console.log(err))
    }

    componentWillUnmount(){
        localStorage.clear()
    }

    render() { 
        console.log(localStorage.getItem('users'))
        return (
            <h1>About Component</h1>
        );
    }
}
 
export default About;