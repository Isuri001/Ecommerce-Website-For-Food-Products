import React from "react";
import HomeCart from "../component/HomeCard";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(0, 4);

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
            <span className="text-green-900">Your Home</span>
          </h2>
          <p className="py-5 text-base">
            Welcome to{" "}
            <span className="font-medium text-green-500">Food Franzy </span> !
            Discover a world where passion meets flavor, and quality meets
            convenience. Our e-commerce platform is crafted for food enthusiasts
            like you. Start a unique gastronomic journey with our handpicked
            delights, guaranteed to elevate your dining experience.
          </p>
          <button className="font-bold bg-green-400 text-slate-200 px-6 py-3 rounded-md">
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
    </div>
  );
};

export default Home;
