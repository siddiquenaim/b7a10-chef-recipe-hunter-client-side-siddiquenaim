import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "./SingleQuestion";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";

const Blog = () => {
  const faq = useLoaderData();
  return (
    <div className="w-[90%] mx-auto my-20">
      <div className="flex justify-center items-center">
        <PDFDownloadLink document={<PDFFile />} filename="Blog">
          {({ loading }) =>
            loading ? (
              <button className="btn btn-custom">Loading Document...</button>
            ) : (
              <button className="btn btn-custom normal-case mb-10">
                Download PDF
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
      <div>
        <h1 className="mb-10 text-3xl lg:text-5xl font-bold text-center">
          Answers to your questions
        </h1>

        <div>
          {faq.map((singleQuestion) => (
            <SingleQuestion
              key={singleQuestion.id}
              singleQuestion={singleQuestion}
            ></SingleQuestion>
          ))}
        </div>
      </div>
    </div>
  );
  z;
};

export default Blog;
