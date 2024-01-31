import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../utilis/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const edit = () => {
  const navigate = useNavigate();
  const [Products, setProducts] = useContext(ProductsContext);
  const { id } = useParams();
//   const [product, setproduct] = useState();
const product = Products.find((p) => p.id == id);

const { register, handleSubmit, setValue, watch } = useForm();
  // const navigate =useNavigate()
  // console.log(register);
  useEffect(() => {
    if (product) {
      Object.keys(product).forEach((key) => setValue(key, product[key]));
    }
  }, [product, setValue]);

  const editProduct = (data) => {
    const updatedProducts = Products.map((p) => (p.id == id ? { ...p, ...data } : p));
    setProducts(updatedProducts);
    localStorage.setItem("Products", JSON.stringify(updatedProducts));
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit(editProduct)} className="flex flex-col items-center w-full h-full p-10">
      <h1 className="text-2xl font-semi-bold mb-5">Edit New products</h1>
      <input {...register("image")} className="w-1/2 mb-3 text-xl font-medium border border-sky-500 rounded-md px-2" type="URL" placeholder="image" />
      <input {...register("title")} className="w-1/2 mb-3 text-xl font-medium border border-sky-500 rounded-md px-2" type="text" placeholder="Title" />
      <div className="w-1/2 flex justify-between gap-20">
        <input {...register("category")} className="w-full mb-3 text-xl font-medium border border-sky-500 rounded-md px-2" type="text" placeholder="category" />
        <input {...register("price")} className="w-full mb-3 text-xl font-medium border border-sky-500 rounded-md px-2" type="number" placeholder="price" />
      </div>
      <textarea {...register("description")} className="w-1/2 border outline-blue-300 mb-3" name="description" rows="10"></textarea>
      <div className="w-1/2 p-2">
        <button className="bg-blue-200 px-2 py-2 border rounded-full border-blue-300 font-semibold text-black">Edit Product</button>
      </div>
    </form>
  );
};

export default edit;
