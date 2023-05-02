import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
    <div>
      <h1>Recipe here: {chefInfo.chefName}</h1>
      {recipes.map((recipe) => (
        <p>{recipe.recipeName}</p>
      ))}
    </div>
  );
};

export default SingleChefRecipes;
