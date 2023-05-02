import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const ChefSection = () => {
  const [chefList, setChefList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chefs`)
      .then((res) => res.json())
      .then((data) => setChefList(data));
  }, []);
  return (
    <div className="w-[95%] lg:w-[90%] mx-auto grid lg:grid-cols-2 gap-5 mb-10">
      {chefList.map((chef) => (
        <ChefCard key={chef.chefId} chef={chef}></ChefCard>
      ))}
    </div>
  );
};

export default ChefSection;
