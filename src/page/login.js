import React, { useState } from "react";
import loginSignupImage from "../assest/login..gif";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log(data);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //page is not be refreshed of this

    //check the password and confirmpassord are equal or not
    const { email, password } = data;
    if (email && password) {
      alert("Successfull");
    } else {
      alert("Please enter required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/* <h1>Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={loginSignupImage} className="w-15" />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>

        <p className="text-sm mt-2">
          Don't have an account ?{" "}
          <Link to={"/signup"} className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
