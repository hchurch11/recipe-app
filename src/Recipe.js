import React from "react";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  portions,
  totalTime,
  recipeUrl,
}) => {
  return (
    <div className="Recipe text-center card">
      <div className="recipe-info card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="font-italic">Serves: {portions}</h3>
        <p> {Math.round(calories / portions)} cal/serving</p>
        <img className="recipe-img card-img-top" src={image} alt=""></img>

        <div className="ingredients-list card-text">
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
    </div>
  );
};

export default Recipe;
