import React from "react";
import { Link } from "react-router-dom";
import { addCartItem, increaseQty } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const CardFeature = ({ image, name, price, category, id }) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white cursor-pointer hover:drop-shadow-lg py-5 px-4 rounded flex flex-col">
      <Link
        to={`/menu/${id}`}
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
      >
        <div className="h-28 flex flex-col justify-center items-center">
          <img src={image} className="h-full" />
        </div>
        <h3 className="font-semibold text-slate-600  capitalize text-md mt-4 whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <p className=" text-slate-500 font-sm">{category}</p>
        <p className=" font-bold">
          <span className="text-red-500 font-semibold">Rs.</span>
          <span className="font-semibold">{price}</span>
        </p>
      </Link>
      <button
        className="bg-emerald-300 rounded py-1 my-4 hover:bg-emerald-400 w-full"
        onClick={handleAddCartProduct}
      >
        Add to cart
      </button>
    </div>
  );
};

export default CardFeature;
