import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Footer from "./Footer";
import Recipe from "./Recipe";

export default function App() {
  // STATES
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("sparkling");
  const [query, setQuery] = useState("sparkling");

  const getRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }, [query]);

  useEffect(() => {
    getRecipes();
  }, [query, getRecipes]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App container-fluid">
      <div className="search-header">
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="search an ingredient . . . "
          />
          <button className="btn btn-block search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="card-columns">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            portions={recipe.recipe.yield}
            totalTime={recipe.recipe.totalTime}
            recipeUrl={recipe.recipe.url}
            foodAllergies={recipe.recipe.cautions}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
