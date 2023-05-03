import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    chefPic,
    chefName,
    yearsOfExperience,
    numRecipes,
    totalLikes,
    chefId,
  } = chef;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border">
      <figure>
        <LazyLoad height={"100%"} width={"100%"} threshold={0.95}>
          <img
            style={{ height: "365px", width: "365px" }}
            src={chefPic}
            alt="Chef Picture"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>
          Years of Experience:{" "}
          <span className="font-semibold">{yearsOfExperience}</span>
        </p>
        <p>
          Number of Recipes: <span className="font-semibold">{numRecipes}</span>
        </p>
        <p>
          Total likes: <span className="font-semibold">{totalLikes}</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/recipes/${chefId}`}>
            <button className="btn btn-custom">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
