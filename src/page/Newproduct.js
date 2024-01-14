import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    // console.log(data);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter Require Fields");
    }
  };

  return (
    <div className="p-4 ">
      <form
        className="m-auto w-full max-w-md shadow-inner  rounded-md flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="font-serif">
          Name
        </label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-100 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category" className="font-serif">
          Category
        </label>
        <select
          className="bg-slate-100 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"snacks"}>Snacks</option>
          <option value={"icecream"}>IceCream</option>
          <option value={"burgers"}>Burgers</option>
          <option value={"cooldrinks"}>Cool Drinks</option>
          <option value={"pastry"}>Pastry</option>
          <option value={"cake"}>Cake</option>
        </select>

        <label htmlFor="image" className="my-1 font-serif ">
          Image
          <div className="h-40 w-full bg-slate-100  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full py-1" />
            ) : (
              <span className="text-5xl">
                <IoCloudUploadOutline />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1 font-serif">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-100 p-1 my-1"
          onChange={handleOnChange}
          name="price"
          value={data.price}
        ></input>

        <label htmlFor="description" className="my-1 font-serif">
          Description
        </label>
        <textarea
          rows={2}
          className="bg-slate-100 p-1 my-1 resize-none"
          onChange={handleOnChange}
          name="description"
          value={data.description}
        ></textarea>

        <button className="bg-blue-400 hover:bg-blue-500 p-1 my-1 font-bold drop-shadow font-medium">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
