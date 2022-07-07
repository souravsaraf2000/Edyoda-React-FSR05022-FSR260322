import './App.css';
import React from 'react';
import Home, {Greet, About} from './RenderList';
import styles from "./styles.module.css"
/*

Component is a class/function which returns some UI

*/

function App() {
  console.log(styles)
  return (
    <div>
      <h2 className={styles.h2Styling}>Hello!</h2>
      <Greet message = 'Good Evening!'/>
      <About/>
      <Home />
    </div>
  );
}

export default App;