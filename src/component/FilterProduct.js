import React from "react";
import { ImSpoonKnife } from "react-icons/im";

const FilterProduct = ({ category, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="text-3xl p-5 rounded-full bg-emerald-500 cursor-pointer">
        <ImSpoonKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;
