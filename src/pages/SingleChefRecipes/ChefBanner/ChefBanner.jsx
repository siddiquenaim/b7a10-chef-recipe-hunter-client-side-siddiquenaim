import React from "react";
import LazyLoad from "react-lazy-load";

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
        <LazyLoad
          height={"100%"}
          width={"100%"}
          threshold={0.95}
          className="max-w-xs rounded-lg lg:max-w-full"
        >
          <img
            src={chefPic}
            className="max-w-xs rounded-lg shadow-2xl lg:max-w-full"
            alt={`${chefName} Picture`}
          />
        </LazyLoad>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{chefName}</h1>
          <div className="lg:w-[80%] text-xl">
            <p className="py-6 font-medium text-xl text-[#545E6F]">{chefBio}</p>
            <p>
              <span className="font-semibold">Years of experience:</span>{" "}
              {yearsOfExperience} years
            </p>
            <p className="my-3">
              <span className="font-semibold">Number of Recipes:</span>{" "}
              {numRecipes}
            </p>
            <p>
              <span className="font-semibold">Total likes:</span> {totalLikes}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
