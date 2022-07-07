import React from 'react';

/*
Exports 

- named
- default

*/

export const Greet = ({message}) => {
    return <h2>{message}</h2>
}

export const About = () => {
    return <h2>We are on 4th day of React curriculum !!</h2>
}

const Home = () => {
    return <h2>We are learning about imports and exports !!</h2>
}

export default Home;