import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import ChefBanner from "../ChefBanner/ChefBanner";

const SingleChefRecipes = () => {
  const [chefInfo, setChefInfo] = useState({});
  const recipes = useLoaderData();
  const chefId = useParams();
  console.log(chefId);
  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${chefId.id}`)
      .then((res) => res.json())
      .then((data) => setChefInfo(data));
  }, []);
  console.log(recipes);
  return (
    <div className="mt-10">
      <div>
        <ChefBanner key={chefInfo.chefId} chefInfo={chefInfo}></ChefBanner>
      </div>

      <div className="w-[80%] lg:w-[90%] lg:mx-auto ml-3 grid lg:grid-cols-2 gap-10 pb-20 mt-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipeId} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default SingleChefRecipes;
