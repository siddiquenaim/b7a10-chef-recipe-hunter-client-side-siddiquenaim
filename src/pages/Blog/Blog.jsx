import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "./SingleQuestion";

const Blog = () => {
  const faq = useLoaderData();
  return (
    <div className="w-[90%] mx-auto my-20">
      <h1 className="mb-14 text-5xl font-bold text-center">
        Answers to Your Question
      </h1>
      {faq.map((singleQuestion) => (
        <SingleQuestion
          key={singleQuestion.id}
          singleQuestion={singleQuestion}
        ></SingleQuestion>
      ))}
    </div>
  );
};

export default Blog;
