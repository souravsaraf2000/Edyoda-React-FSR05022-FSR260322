import './App.css';
import React from 'react';
import Header from './components/headers/Header';
import MenuItems from './components/menuItems/MenuItems';
import Card from './components/cards/Card';

function App() {

  const foodItems = [
    {
      name: 'Pizza',
      imageLink: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg'
    },
    {
      name: 'Biriyani',
      imageLink: 'https://recipesaresimple.com/wp-content/uploads/2014/08/thalassery-dum-biriyani-recipe.jpg'
    },
    {
      name: 'Cake',
      imageLink: 'https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-600x600w.jpg.webp'
    },
    {
      name: 'Dosa',
      imageLink: 'https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900'
    },
    {
      name: 'Sandwich',
      imageLink: 'https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311?k=20&m=157431311&s=612x612&w=0&h=h2BtVkKkzRwFeDZFezLtE5xwa8zi0Ix_vfdFXrGaz6k='
    }
  ]

  return (
    <div>
      <Header />
      <h1>Top 5 favourite food</h1>
      <MenuItems/>
      <Card foodItems = {foodItems}/>
    </div>
  );
}

export default App;