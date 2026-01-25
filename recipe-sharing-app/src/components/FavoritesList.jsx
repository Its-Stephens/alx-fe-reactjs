import React from "react";
import useRecipeStore from "./recipeStore";

// FavoritesList.jsx
const FavouritesList = useRecipeStore(state =>
  // Convert favorite IDs into full recipe objects
  state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean),
  );

  const removeFavourite = useRecipeStore((state) => state.removeFavourite);

  if (favourites.length === 0) {
    return (
      <div>
        <h2>My Favourites</h2>
        <p>No favourites yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Favourites</h2>

      {favourites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginbottm: "10px",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavourite(recipe.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};


export default FavouritesList;