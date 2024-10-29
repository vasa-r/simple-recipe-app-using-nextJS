import { RecipesResponse } from "@/types/types";

interface RecipeListProps {
  recipeList: RecipesResponse;
}

const RecipeList = ({ recipeList }: RecipeListProps) => {
  console.log(recipeList);
  return <div>RecipeList</div>;
};

export default RecipeList;
