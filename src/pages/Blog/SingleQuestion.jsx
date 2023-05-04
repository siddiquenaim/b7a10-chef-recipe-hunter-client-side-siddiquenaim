import React from "react";

const SingleQuestion = ({ singleQuestion }) => {
  const { id, question, answer } = singleQuestion;
  return (
    <div className="my-4 text-xl font-medium">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <p className="mb-2">
            <span className="font-semibold">Question-{id}:</span> {question}
          </p>
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-semibold">Answer:</span> {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
