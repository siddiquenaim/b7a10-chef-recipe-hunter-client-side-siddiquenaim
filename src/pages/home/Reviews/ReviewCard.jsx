import React from "react";

const ReviewCard = ({ review }) => {
  const { name, img, occupation, testimonial } = review;
  return (
    <div className="card w-full shadow-xl text-black bg-[#ffffffe1]">
      <figure className="px-10 pt-10">
        <img
          style={{ height: "200px" }}
          src={img}
          alt="Shoes"
          className="rounded-xl max-w-sm"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          <small className="font-semibold text-sm text-[#3a414c]">
            {occupation}
          </small>
        </p>
        <p>{testimonial}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
