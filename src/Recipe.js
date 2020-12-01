import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
/* import Button from "react-bootstrap/Button"; */

const Recipe = ({
  title,
  calories,
  image,
  portions,
  ingredients,
  totalTime,
  recipeUrl,
  key,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Recipe text-center card" key={key}>
      <div className="recipe-info card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="font-italic">Serves: {portions}</h3>
        <p> {Math.round(calories / portions)} cal/serving</p>
        <img className="recipe-img card-img-top" src={image} alt=""></img>
        <>
          <button
            className="btn btn-block"
            onClick={() => setOpen(!open)}
            aria-controls="fade-text"
            aria-expanded={open}
          >
            Click to view Ingredients
          </button>
          <Collapse in={open}>
            <div id="fade-text">
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
          </Collapse>
        </>
        <a
          href={recipeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn recipe-url btn-block"
        >
          Go To Recipe
        </a>
      </div>
      <div className="card-footer">
        <p>Total Time: {totalTime} mins</p>
      </div>
    </div>
  );
};

export default Recipe;
