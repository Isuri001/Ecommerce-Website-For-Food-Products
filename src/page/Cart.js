import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCartImage from "../assest/empty-cart-1.png";
import { useNavigate } from "react-router-dom";
import Success from "./Success";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalprice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const handleReset = () => {
    setRedirect(true);
  };

  if (redirect) {
    navigate("../Success");
  }

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-500">
          Your Cart Items
        </h2>
        {productCartItem[0] ? (
          <div className="my-4 flex gap-4">
            {/* Display cart items */}
            <div className="w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* Total cart items */}
            <div className="w-full max-w-md  ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price : </p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500 font-semibold">Rs. </span>
                  {totalprice}
                </p>
              </div>
              <button
                onClick={handleReset}
                className="bg-red-500 w-full text-lg font-bold py-2 text-white"
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col mt-10">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-600 text-2xl font-bold">
                Your Cart is Empty
              </p>
              <p className="text-slate-400">
                Looks like you have not added anything to you cart .Go ahead &
                explore top categories
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
