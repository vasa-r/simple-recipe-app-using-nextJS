import RecipeList from "@/components/RecipeList/RecipeList";
import { RecipesResponse } from "@/types/types";

const fetchRecipes = async (): Promise<RecipesResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data?.recipes;
  } catch (error) {
    console.log(error);
    throw Error;
  }
};

const Recipes = async () => {
  const recipeList = await fetchRecipes();
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
};

export default Recipes;