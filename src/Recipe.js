import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients, portions }) => {
  return (
    <div className="Recipe text-center">
      <div className="recipe-info">
        <h2>{title}</h2>
        <h3 className="font-italic">Serves: {portions}</h3>
        <p> {Math.round(calories / portions)} cal/serving</p>
      </div>

      <img className="recipe-img card-img-top" src={image} alt=""></img>
      <div className="ingredients-list ">
        <ol>
          {ingredients.map((ingredients, index) => (
            <li
              className="ingredient text-left"
              key={`${ingredients.text}_${index}`}
            >
              {ingredients.text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
