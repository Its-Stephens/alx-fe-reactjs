import useRecipeStore from "./recipeStore";
import { useState, useEffect } from 'react';


const EditRecipeForm = ({ recipe}) => {
       const updateRecipe = useRecipeStore((state) => state.updatedRecipe);



    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);


    const handleSubmit = (event) => {
        event.preventDefault();

        updateRecipe({
            id: recipe.id,
            title,
            description,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4><i>Edit Recipe</i></h4>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title" />
            
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description" />
            
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;