import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import axios from 'axios';


function App(props){

  console.log(props)
  const getData = () => {
    axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    .then((res)=>{
      props.updateAccount(res.data['accountsPage'])
      props.updateDashboard(res.data['dasbhoardPage'])
      props.updateProduct(res.data['productsPage'])
    }
    )
    .catch((err)=>console.log(err))
  }
  return(
    <div>
        <h1>App Component</h1>
        <button onClick = {getData}>Get data</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccount : (accountData)=>dispatch({
      type: 'UPDATE_ACCOUNT_DATA',
      payload: accountData
    }),
    updateDashboard : (dashboardData)=>dispatch({
      type: 'UPDATE_DASHBOARD_DATA',
      payload: dashboardData
    }),
    updateProduct : (productData)=>dispatch({
      type: 'UPDATE_PRODUCT_DATA',
      payload: productData
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
