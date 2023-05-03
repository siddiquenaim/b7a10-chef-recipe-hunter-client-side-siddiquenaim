import React, { useState } from "react";
import "./RecipeCard.css";
import toast, { Toaster } from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const { foodImage, recipeName, ingredients, cookingMethod, rating } = recipe;
  const [favorite, setFavorite] = useState(false);
  const notify = () => toast.success("Recipe Added to Your Favorites");

  const handleFavorite = () => {
    notify();
    setFavorite(true);
  };
  return (
    <div className="card w-[95%] mx-auto bg-base-100 shadow-xl border ">
      <div className="card-body mx-auto mb-3">
        <h2 className="card-title text-center mx-auto text-xl mb-3">
          {recipeName}
        </h2>
        <Toaster></Toaster>
        <div>
          <p className="text-center mb-3">
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <figure>
            <img
              className="rounded-3xl"
              style={{ height: "365px", width: "365px" }}
              src={foodImage}
              alt={`${recipeName} Picture`}
            />
          </figure>
          <div className="my-4">
            <h3 className="text-center mx-auto font-bold text-lg underline mb-2">
              Ingredients:
            </h3>{" "}
            {ingredients.map((i) => (
              <span key={i}>{i}, </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-center mx-auto font-bold text-lg underline mb-2">
            Cooking Method:
          </h3>
          {cookingMethod}
        </div>
        <div className="card-actions justify-center mt-3">
          <button
            onClick={handleFavorite}
            className="btn btn-favorite"
            disabled={favorite && true}
          >
            {favorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
