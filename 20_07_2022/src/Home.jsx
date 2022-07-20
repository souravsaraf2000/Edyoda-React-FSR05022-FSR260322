import React, { useEffect } from 'react'


function Home() {
    
    useEffect(()=>{
        return ()=>{
            console.log('Unmounted')
        }
    })

    return ( 
        <div>
            <h1>Home Component</h1>
        </div>
     );
}

export default Home;