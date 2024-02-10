import React from "react";
import sGif from "../assest/s.gif";

const Success = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center flex-col mt-10">
        <img src={sGif} className="w-full max-w-sm" />
        <p className="text-emerald-500 text-3xl font-bold">Payment Success !</p>
      </div>
    </div>
  );
};

export default Success;
