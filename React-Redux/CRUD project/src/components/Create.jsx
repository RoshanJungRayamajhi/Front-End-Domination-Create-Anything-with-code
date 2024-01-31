import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ProductsContext } from '../utilis/Context';
import { nanoid } from 'nanoid';
import { data } from 'autoprefixer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
   const navigate = useNavigate()
    const[Products,setProducts] = useContext(ProductsContext);

    const {register,handleSubmit}=useForm();
    // const navigate =useNavigate()
    // console.log(register);
    const onSubmit = (data) => {
        if (data.title.trim().length <5 || data.image.trim().length <5 || data.category.trim().length <5 || data.price.trim()<0 || data.description.trim().length <5) {
            alert("please keep 5 digit")
            return;
        }
       var id =nanoid();
       var datawid ={...data, id}
       setProducts([...Products, datawid]);
       localStorage.setItem("Products", JSON.stringify([...Products, datawid])); 
      
        navigate("/");
      };
      // Handle form submission logic here
        // setProducts([...Products, data]);
    // handleSubmit((data)=>setProducts([...Products,data]))
  return (
    <div className=' w-full h-screen bg-zinc-100 p-10 flex items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className= 'pl-10 w-[70%] h-[80%] flex flex-col'>
            <input {...register("title")} className=' w-[80%]  mt-10 bg-zinc-300 text-black p-2' type="text" placeholder='title' />
            <input  {...register("image")} className=' w-[80%]  mt-4 bg-zinc-300 text-black p-2' type="text" placeholder='image' />
            <div className='flex mt-4 w-[80%] gap-10'>
                <input  {...register("category")} className=' basis-[50%] p-2 bg-zinc-500' type="text" placeholder='category' />
                <input  {...register("price")} className=' basis-[50%] p-2 bg-zinc-500' type="number" placeholder='Price' />
            </div>
            <textarea  {...register("description")} className='bg-zinc-400 mt-4 w-[80%] text-sm p-2' rows="9"></textarea>
            < button className=' my-2 w-fit h-fit  px-3 py-2 rounded-md bg-green-400'>Add product</button>
            {/* <input  className=' my-2 w-fit h-fit  px-3 py-2 rounded-md bg-green-400' type="submit" value="add product" /> */}
        </form>
    </div>
  )
}

export default Create