import React, { useEffect, useRef, useState } from "react";
import HomeCart from "../component/HomeCard";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(0, 4);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );

  const loadingArray = new Array(4).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-3 py-0">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png "
              className="h-7"
            ></img>
          </div>
          <h2 className="text-4xl py-4 md:text-7xl font-bold">
            The Fasted Delivery in{" "}
            <span className="text-emerald-900">Your Home</span>
          </h2>
          <p className="py-5 text-base">
            Welcome to{" "}
            <span className="font-medium text-emerald-500">Food Franzy </span> !
            Discover a world where passion meets flavor, and quality meets
            convenience. Our e-commerce platform is crafted for food enthusiasts
            like you. Start a unique gastronomic journey with our handpicked
            delights, guaranteed to elevate your dining experience.
          </p>
          <button className="font-bold bg-emerald-400 text-slate-200 px-6 py-3 rounded-md">
            Order Now
          </button>
        </div>
        {/* <div className="md:w-1/2 flex flex-wrap gap-4 p-4 justify-center">
          {homeProductCartList[0] &&
            homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })}
        </div> */}

        <div className="md:w-1/2 flex p-0 justify-center">
          <HomeCard />
        </div>
      </div>

      <div className=" ">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-md p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-md p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
        ref={slideProductRef}
      >
        {homeProductCartListVegetables.map((el) => {
          return (
            <CardFeature
              key={el._id}
              id={el._id}
              name={el.name}
              category={el.category}
              price={el.price}
              image={el.image}
            />
          );
        })}
      </div>

      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
