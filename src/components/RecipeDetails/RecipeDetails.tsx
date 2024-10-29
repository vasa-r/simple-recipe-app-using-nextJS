import { Recipe } from "@/types/types";
import Link from "next/link";

interface RecipeDetailsProps {
  recipe: Recipe | null;
}

const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  //   console.log(recipe);
  return (
    <div>
      <Link href={"/recipe-list"}>Go to recipe list</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="w-full lg: sticky top-0.5 sm:flex gap-2">
            <img
              src={recipe?.image}
              alt={recipe?.name}
              className="w-4/5 rounded-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {recipe?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700">{recipe?.mealType[0]}</p>
            </div>
            <div className="mt-5">
              <p className="text-2xl text-gray-800">{recipe?.cuisine}</p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {recipe?.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
