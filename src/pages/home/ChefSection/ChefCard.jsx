import React from "react";

const ChefCard = ({ chef }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl border">
      <figure>
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-custom">View Recipes </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
