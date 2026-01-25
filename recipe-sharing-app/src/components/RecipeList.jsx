import { Link } from 'react-router-dom';
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.decription}</p>

                    <Link to={`/Recipe/${recipe.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;