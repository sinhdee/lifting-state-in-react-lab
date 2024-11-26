// src/components/IngredientList.jsx

import { availableIngredients } from "../App";

const IngredientList = ({ addIngredient }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name} <button onClick={() => addIngredient(ingredient.name)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
  export default IngredientList;
  