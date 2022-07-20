import React, { useState , useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
// import NotFound from './404';
// import About from './About';
import './App.css';
// import BtnDisplay from './BtnDisplay';
// import Contact from './Contact';
import Home from './Home';
// import NavBar from './NavBar';

// function App(){
//   let [isLoggedIn, setLoggedIn] = useState(true)

//   const updateStatus = () => {
//     setLoggedIn(!isLoggedIn)
//   }

//   return(
//     <div>
//         <BrowserRouter>
//           <NavBar/>
//           <Routes>
//             <Route path='/' element = {<Home/>}/>
//             <Route path='/about' element = {isLoggedIn ? <About/> : <Navigate to='/'/>}/>
//             <Route path='/contact' element = {isLoggedIn ? <Contact/> : <Navigate to='/'/>}/>
//             <Route path='*' element = {<NotFound/>}/>
//           </Routes>
//           <h1>Log in status : {String(isLoggedIn)}</h1>
//           <BtnDisplay isLoggedIn={isLoggedIn} updateStatus={updateStatus}/>
//         </BrowserRouter>
//     </div>
//   )
// }

function App(){
  const [status, setStatus] = useState(true)

  useEffect(()=>{
    console.log('Use Effect called !')
  },[status])

  return(
    <div>
      <h1>App Component Status:{String(status)}</h1>
      {
        status ? <Home/> : ''
      }
      <button onClick={()=>{
        setStatus(!status)
      }}>Update Status</button>
    </div>
  )
}

export default App;
