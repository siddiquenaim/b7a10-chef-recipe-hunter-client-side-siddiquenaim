import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-banner mb-24">
      <div className="hero-content lg:text-center text-neutral-content">
        <div className="w-[90%] lg:w-[75%]">
          <h1 className="mb-5 text-5xl font-bold">Discover Turkish Cuisine</h1>
          <p className="mb-5 lg:w-[75%] lg:mx-auto text-xl">
            Explore the rich flavors of Turkish cuisine with TasteTurkish. From
            mouthwatering kebabs to delectable baklava, our recipes showcase the
            diversity of this ancient culinary tradition. Join us on a
            gastronomic adventure today!
          </p>
          <button className="btn btn-custom normal-case">
            Start Food Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
