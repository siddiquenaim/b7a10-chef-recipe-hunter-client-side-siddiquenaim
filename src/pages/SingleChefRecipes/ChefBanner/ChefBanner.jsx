import React from "react";

const ChefBanner = ({ chefInfo }) => {
  const {
    chefPic,
    chefName,
    yearsOfExperience,
    numRecipes,
    chefBio,
    totalLikes,
  } = chefInfo;
  return (
    <div className="hero min-h-screen mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chefPic}
          className="max-w-xs rounded-lg shadow-2xl lg:max-w-full"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{chefName}</h1>
          <div className="lg:w-[80%]">
            <p className="py-6">{chefBio}</p>
            <p>
              <span className="font-semibold">Years of experience:</span>{" "}
              {yearsOfExperience} years
            </p>
            <p>
              <span className="font-semibold">Number of Recipes:</span>{" "}
              {numRecipes} years
            </p>
            <p>
              <span className="font-semibold">Total likes:</span> {totalLikes}{" "}
              years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
