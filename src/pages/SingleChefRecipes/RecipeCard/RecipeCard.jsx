import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const { foodImage, recipeName, ingredients, cookingMethod, rating } = recipe;
  return (
    <div className="card w-[95%] mx-auto bg-base-100 shadow-xl border ">
      <div className="card-body mx-auto mb-3">
        <h2 className="card-title text-center mx-auto text-xl mb-3">
          {recipeName}
        </h2>
        <div>
          <p className="text-center mb-3">
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <figure>
            <img
              className="rounded-3xl"
              style={{ height: "365px", width: "365px" }}
              src={foodImage}
              alt="Chef Picture"
            />
          </figure>
          <div className="my-4">
            <h3 className="text-center mx-auto font-bold text-lg underline mb-2">
              Ingredients:
            </h3>{" "}
            {ingredients.map((i) => (
              <span>{i}, </span>
            ))}
          </div>
        </div>
        <div>
          <p>
            <h3 className="text-center mx-auto font-bold text-lg underline mb-2">
              Cooking Method:
            </h3>
            {cookingMethod}
          </p>
        </div>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-favorite ">Add to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
