import { Recipe, RecipesResponse } from "@/types/types";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface RecipeListProps {
  recipeList: Recipe[];
}

const RecipeList = ({ recipeList }: RecipeListProps) => {
  //   console.log(recipeList.length);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <Link href={"/"}>Go Home</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe?.id}`} key={recipe?.id}>
                  <Card>
                    <CardContent className="bg-white pt-6 rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.05] transition-all">
                      <div className="w-full aspect-video lg:h-80">
                        <img
                          src={recipe?.image}
                          alt={recipe?.name}
                          className="h-full w-full object-cover object-top rounded-md"
                        />
                      </div>
                      <div className="p-6 pb-0 flex justify-center items-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe?.name}
                        </h3>
                      </div>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-sm font-medium text-gray-600">
                          Rating: {recipe?.rating}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-sm font-medium text-gray-600">
                          {recipe?.cuisine}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
