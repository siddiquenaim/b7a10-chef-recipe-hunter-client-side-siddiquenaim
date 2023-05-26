import React, { useContext } from "react";
import "./Banner.css";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero min-h-screen bg-banner mb-24">
      <div className="hero-content lg:text-center text-neutral-content">
        <div className="w-[90%] lg:w-[75%]">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Turkish Cuisine O
          </h1>
          <p className="mb-5 lg:w-[75%] lg:mx-auto text-xl">
            Explore the rich flavors of Turkish cuisine with TasteTurkish. From
            mouthwatering kebabs to delectable baklava, our recipes showcase the
            diversity of this ancient culinary tradition. Join us on a
            gastronomic adventure today!
          </p>
          {!user ? (
            <Link to="/login">
              <button className="btn btn-custom normal-case">
                Start Food Journey
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
