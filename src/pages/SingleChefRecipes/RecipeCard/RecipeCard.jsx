import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const { foodImage, recipeName, ingredients, cookingMethod, rating } = recipe;
  return (
    <div className="card w-[95%] lg:mx-auto bg-base-100 shadow-xl border ">
      <div className="card-body lg:w-[80%] lg:mx-auto mb-3">
        <h2 className="card-title text-center mx-auto text-xl mb-3">
          {recipeName}
        </h2>
        <div>
          <p className="text-center mb-3">
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <figure
            className="mx-auto rounded-lg"
            style={{ height: "auto", width: "300px" }}
          >
            <img
              className="rounded-full"
              style={{ height: "300px", width: "300" }}
              src={foodImage}
              alt="Album"
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
