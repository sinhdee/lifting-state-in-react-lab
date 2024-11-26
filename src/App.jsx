// src/App.jsx

import './App.css';
import IngredientList from './components/IngredientList'
import BurgerStack from './components/BurgerStack'; './components/BurgerStack'
import { useState } from 'react';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];


const App = () => {
  const [burgerStack, setBurgerStack] = useState([]);

  const addIngredient = (ingredient) => {
    setBurgerStack((prevStack) => [...prevStack, ingredient]);
  };

  const removeIngredient = (ingredientToRemove) => {
    setBurgerStack((prevStack) =>
      prevStack.filter((ingredient) => ingredient !== ingredientToRemove)
    );
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList addIngredient={addIngredient} />
      <div className='burger-stack'>
        <BurgerStack burgerStack={burgerStack} removeIngredient={removeIngredient} />
        </div>
      </section>
    </main>
  );
};


export default App;
