import React from "react";

const Card = ({ title, bg }) => {
  return (
    <div className="p-1 mb-8 h-48 w-72  shadow-lg shadow-black/30 bg-gray-200 rounded-md">
      <div
        className={`${bg} bg-cover h-44 space-y-14  bg-center bg-no-repeat text-center bg-black/70 bg-blend-color rounded-md p-2 text-white`}
      >
        <h1 className="mt-5  text-2xl font-medium underline underline-offset-2">
          {title}
        </h1>
        <button className="bg-amber-300   text-black/90 p-2 rounded-md font-medium">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
