import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} className="h-28 w-36 object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl ">
          {name}
        </h3>
        <p className=" text-slate-500 font-medium  ">{category}</p>
        <p className=" font-bold text-base ">
          <span className="text-red-500 font-semibold">Rs.</span>
          <span>{price}</span>
        </p>
        <div className="flex gap-3 items-center">
          <button className="bg-slate-300 rounded py-1 my-4 hover:bg-slate-400 p-1">
            <FaPlus />
          </button>
          <p className="font-semibold p-1">{qty}</p>
          <button
            onClick={""}
            className="bg-slate-300 rounded py-1 my-4 hover:bg-slate-400 p-1 "
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
