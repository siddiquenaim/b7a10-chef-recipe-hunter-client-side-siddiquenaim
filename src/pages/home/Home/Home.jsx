import React from "react";
import Banner from "../Banner/Banner";
import ChefSection from "../ChefSection/ChefSection";
import Reviews from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <Reviews></Reviews>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
