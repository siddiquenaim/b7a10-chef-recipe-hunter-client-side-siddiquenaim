import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import chefs from "../../images/aboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen pb-20">
      <div className=" text-neutral-content w-[90%] lg:w-[80%]">
        <div className="flex">
          <div>
            <div className="mt-20">
              <h1 className="mb-20 text-5xl font-bold text-black text-center">
                About Us
              </h1>
            </div>
            <div className=" flex justify-center items-center mb-20">
              <img src={chefs} alt="" className="rounded-lg lg:w-[75%]" />
            </div>

            <div className="text-black">
              <p className="text-2xl mb-5 text-center font-semibold">
                Welcome to TasteTurkish!
              </p>

              <div className="text-xl text-[#545E6F]">
                <p className="mb-3">
                  At TasteTurkish, we are passionate about showcasing the rich
                  and diverse cuisine of Turkey. Our mission is to bring the
                  flavors and traditions of Turkish food to your kitchen,
                  allowing you to experience the vibrant and delicious world of
                  Turkish cuisine.
                </p>
                <p className="mb-3">
                  With our team of expert Turkish chefs, we curate and create
                  authentic Turkish recipes that are easy to follow and prepare.
                  Whether you're a seasoned cook or just starting your culinary
                  journey, our recipes cater to all skill levels and are
                  designed to help you master the art of Turkish cooking.
                </p>

                <p className="mb-3">
                  We understand the importance of using fresh, quality
                  ingredients, and our recipes reflect that. We carefully select
                  ingredients that capture the essence of Turkish flavors,
                  ensuring that each dish is as authentic and flavorful as
                  possible. From aromatic spices to vibrant produce, our recipes
                  will transport you to the bustling streets and lively markets
                  of Turkey.{" "}
                </p>
                <p className="mb-3">
                  But TasteTurkish is more than just a recipe website. It's a
                  community of food enthusiasts, home cooks, and culinary
                  explorers who share a love for Turkish cuisine. We encourage
                  you to connect with us and other like-minded individuals
                  through our comment sections, where you can ask questions,
                  share your cooking experiences, and exchange tips and tricks.
                </p>
                <p className="mb-3">
                  Whether you're looking to recreate classic Turkish dishes like
                  kebabs, baklava, or Turkish delight, or eager to discover new
                  and lesser-known recipes, TasteTurkish is your go-to resource.
                  We're here to guide you every step of the way, providing clear
                  instructions, helpful tips, and stunning food photography to
                  inspire and motivate you in your culinary adventures.
                </p>
                <p className="mb-3">
                  Thank you for joining us on this culinary journey through the
                  flavors of Turkey. We hope that TasteTurkish becomes your
                  trusted companion, inspiring you to explore the richness of
                  Turkish cuisine and create memorable dishes for yourself, your
                  family, and your friends. Happy cooking!
                </p>
                <p>- The TasteTurkish Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
