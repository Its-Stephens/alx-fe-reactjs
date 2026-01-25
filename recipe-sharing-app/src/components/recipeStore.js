import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  
  setRecipes: (recipes) => set({ recipes }),

  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase())
    ),
  })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter(
        (recipe) => recipe.id !== Number(id)
      ),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? updatedRecipe
          : recipe
      ),
    })),
  favourites: [],
  addFavourite: (recipeId) =>
    set((state) => ({ favourites: [...state.favourites, recipeId] })),

  removeFavourite: (recipeId) =>
    set((state) => ({
      favourites: state.favourites.filter(id => id !== recipeId)
    })),
  
  recommendations: [],
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favourites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  })

}));


export default useRecipeStore;