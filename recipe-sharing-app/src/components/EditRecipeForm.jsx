import { useParams } from 'react-router-dom';
import useRecipeStore from "./recipeStore";
import { useState } from 'react';





const EditRecipeForm = () => {
    const { id } = useParams();

    const recipe = useRecipeStore((state) =>
      state.recipes.find((r) => r.id === Number(id)),
    );


    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);

    const updateRecipe = useRecipeStore(state => state.updatedRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();

        updateRecipe({ id: recipe.id, title, description, });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4><i>Edit Recipe</i></h4>

            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;