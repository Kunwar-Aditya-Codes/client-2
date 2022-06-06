import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen flex items-center justify-around text-white  bg-black/70 bg-blend-color  bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-center bg-cover">
      <div className=" p-2 mt-36 space-y-4">
        <h1 className="text-4xl font-bold lg:text-6xl">2nd ASIACON 2022</h1>
        <h2 className="text-3xl font-medium lg:text-5xl">Pune , India</h2>
        <p className="text-xl font-light lg:text-2xl">
          Technically Sponsered By ABC
        </p>
      </div>
    </div>
  );
};

export default Welcome;
