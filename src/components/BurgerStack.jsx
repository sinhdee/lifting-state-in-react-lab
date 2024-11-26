import React from 'react';

const BurgerStack = ({ burgerStack, removeIngredient }) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      <ul>
        {burgerStack.map((ingredient, index) => (
          <li key={index}>
            {ingredient} <button onClick={() => removeIngredient(ingredient)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
