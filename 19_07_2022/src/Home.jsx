import React, {useState} from 'react'

function Home() {
    const [userName, setUserName] = useState({name: 'John', age: 30})
    console.log(userName)
    return ( 
        <div>
            <h1>Hello {userName.name}</h1>
            <button onClick = {()=>setUserName({...userName, name: 'Shristi'})}>Update Name</button>
        </div>
     );
}

export default Home;