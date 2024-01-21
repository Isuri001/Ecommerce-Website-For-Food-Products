import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);
  return (
    <div className="p-3 md:p-6">
      <div className="w-full max-w-3xl bg-white m-auto md:flex">
        <div className="max-w-sm  overflow-hidden w-full p-7">
          <img
            src={productDisplay.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl ">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-500 font-medium text-2xl ">
            {productDisplay.category}
          </p>
          <p className=" font-bold md:text-2xl ">
            <span className="text-red-500 font-semibold">Rs.</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
            <button className="bg-emerald-300 rounded py-1 my-4 hover:bg-emerald-400 min-w-[100px]">
              Buy
            </button>
            <button className="bg-emerald-300 rounded py-1 my-4 hover:bg-emerald-400 min-w-[100px]">
              Add to cart
            </button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description :</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product "} />
    </div>
  );
};

export default Menu;
