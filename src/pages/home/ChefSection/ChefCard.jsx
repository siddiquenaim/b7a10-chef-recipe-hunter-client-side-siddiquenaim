import React from "react";

const ChefCard = ({ chef }) => {
  const { chefPic, chefName, yearsOfExperience, numRecipes, totalLikes } = chef;
  return (
    <div className="card card-side bg-base-100 shadow-xl border">
      <figure>
        <img
          style={{ height: "365px", width: "365px" }}
          src={chefPic}
          alt="Chef Picture"
        />
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
          <button className="btn btn-custom">View Recipes </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
