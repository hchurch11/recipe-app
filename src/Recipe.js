import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import LikeButton from "./LikeButton";

const Recipe = ({
  title,
  calories,
  image,
  portions,
  ingredients,
  totalTime,
  recipeUrl,
  key,
  foodAllergies,
}) => {
  const [openIngredients, setOpenIngredients] = useState(false);
  const [openAllergens, setOpenAllergens] = useState(false);

  return (
    <div className="Recipe text-center card" key={key}>
      <div className="recipe-info card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="font-italic">Serves: {portions}</h3>
        <p>
          {" "}
          {totalTime > 0 ? ` Total Time: ${totalTime} minutes |` : null}{" "}
          {Math.round(calories / portions)} cal/serving
        </p>

        <img className="recipe-img card-img-top" src={image} alt=""></img>
        <>
          <button
            className="btn btn-block"
            onClick={() => setOpenIngredients(!openIngredients)}
            aria-controls="collapse-text-ingredients"
            aria-expanded={openIngredients}
          >
            Click to view Ingredients
          </button>
          <Collapse in={openIngredients}>
            <div id="collapse-text-ingredients">
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

        <>
          <button
            className="btn btn-block"
            onClick={() => setOpenAllergens(!openAllergens)}
            aria-controls="collapse-text"
            aria-expanded={openAllergens}
            disabled={foodAllergies.length === 0 ? true : false}
          >
            Click to view Allergens
          </button>
          <Collapse in={openAllergens}>
            <div className="">
              <ul className="food-allergies">
                {foodAllergies.map((foodAllergies, index) => (
                  <li className=" text-left" key={`${foodAllergies}_${index}`}>
                    {foodAllergies ? foodAllergies : null}
                  </li>
                ))}
              </ul>
            </div>
          </Collapse>
        </>
        <LikeButton likes={0} />
      </div>
    </div>
  );
};

export default Recipe;
