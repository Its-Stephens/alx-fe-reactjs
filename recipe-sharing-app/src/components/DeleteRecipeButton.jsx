import { use } from "react";
import useRecipeStore from "./recipeStore";
import { useNavigation } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {

    const deleteRecipe = useRecipeStore(state =>
        state.deleteRecipe);
    
    const navigate = useNavigation();
    
    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate('/');
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
