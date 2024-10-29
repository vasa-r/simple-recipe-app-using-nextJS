import RecipeDetails from "@/components/RecipeDetails/RecipeDetails";
import { Recipe, RecipeDetailsProps } from "@/types/types";

const fetchRecipe = async (id: string): Promise<Recipe | null> => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!response.ok) throw new Error("Failed to fetch recipe");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const RecipeDetail = async ({ params }: RecipeDetailsProps) => {
  const { id } = await params;
  const recipe = await fetchRecipe(id);

  return <RecipeDetails recipe={recipe} />;
};

export default RecipeDetail;
