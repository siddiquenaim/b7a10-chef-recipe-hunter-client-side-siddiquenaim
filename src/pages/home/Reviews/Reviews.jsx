import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });
  return (
    <div className="bg-review-banner my-20 p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        What our clients say
      </h1>
      <div className="w-[95%] lg:w-[90%] grid lg:grid-cols-4 mx-auto gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;