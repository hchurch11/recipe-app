import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Recipe from "./Recipe";
import config from "./config";

export default function App() {
  const APP_ID = config.APP_ID;
  const APP_KEY = config.APP_KEY;

  // STATES
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

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
          />
          <button
            className="btn btn-secondary btn-block search-button"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className=" grid-container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            portions={recipe.recipe.yield}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
