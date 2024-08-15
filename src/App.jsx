import React, {Component} from 'react';
import FoodItem from './Component/FoodItem'
import './App.css'
import menu from './assets/menu';

function App() {
  

  return (
    <>
      <header class="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
      <div className="foods-container">
        {menu.map(({img,title,price,desc},i) => {
          return (
            <FoodItem
              key = {i}
              img={img}
              title={title}
              price={price}
              desc={desc}
            />
          );
        })}
      </div>
    </>
  );
}

export default App
