import React from "react";
import useRecipeStore from "./recipeStore";

// FavoritesList component
const FavoritesList = () => {
  // Get the favorite recipes as full objects
  const favorites = useRecipeStore(
    (state) =>
      state.favorites
        .map((id) => state.recipes.find((recipe) => recipe.id === id))
        .filter(Boolean), // remove undefined recipes
  );

  // Get the removeFavorite action from the store
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // If no favorites, show a friendly message
  if (favorites.length === 0) {
    return (
      <div>
        <h2>My Favorites</h2>
        <p>No favorites yet.</p>
      </div>
    );
  }

  // Render favorite recipes
  return (
    <div>
      <h2>My Favorites</h2>

      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px", // fixed typo
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {/* Remove from favorites */}
          <button onClick={() => removeFavorite(recipe.id)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
