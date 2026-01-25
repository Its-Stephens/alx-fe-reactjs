import { Routes, Route, Router } from 'react-router-dom';
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SearchBar />
            <RecipeList />
            <FavoritesList />
            <RecommendationsList />
            <AddRecipeForm />
          </>
        }
      />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default App;
