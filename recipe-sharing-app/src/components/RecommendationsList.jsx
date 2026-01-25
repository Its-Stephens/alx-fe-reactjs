import React from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
     
    const favourites = useRecipeStore((state) => state.favourites);
    const addFavourites = useRecipeStore((state) => state.addFavourites);
    const removeFavourites = useRecipeStore((state) => state.removeFavourites);

    if (recommendations.length === 0) {
        return (
            <div>
                <h2>Recommended Recipes</h2>
                <p>No recommendations yet.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Recommended Recipes</h2>
            {recommendations.map((recipe) => {
                const isFavourite = favourites.includes(recipe.id);

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
                        <button onClick={() =>
                            isFavourite
                                ? removeFavourites(recipe.id)
                                : addFavourites(recipe.id)
                        }
                        >
                            {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};


export default RecommendationsList;