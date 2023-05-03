import React from "react";

const SingleQuestion = ({ singleQuestion }) => {
  const { id, question, answer } = singleQuestion;
  return (
    <div className="my-4 text-xl font-medium">
      <p className="mb-2">
        <span className="font-semibold">Question-{id}:</span> {question}
      </p>
      <p>
        <span className="font-semibold">Answer:</span> {answer}
      </p>
    </div>
  );
};

export default SingleQuestion;
