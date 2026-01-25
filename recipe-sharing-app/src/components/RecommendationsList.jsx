import React from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  // Get recommended recipes from the store
  const recommendations = useRecipeStore((state) => state.recommendations);

  // Get favorites array and actions from the store
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Show message if there are no recommendations
  if (recommendations.length === 0) {
    return (
      <div>
        <h2>Recommended Recipes</h2>
        <p>No recommendations yet.</p>
      </div>
    );
  }

  // Render recommended recipes
  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id); // Check if recipe is already favorited

        return (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Toggle favorite status */}
            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendationsList;
