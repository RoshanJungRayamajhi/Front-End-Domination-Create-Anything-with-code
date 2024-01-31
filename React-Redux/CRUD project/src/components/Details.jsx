import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductsContext } from '../utilis/Context'

const Details = () => {
  // console.log(id)
  const [Products ,setProducts] =useContext(ProductsContext)
  console.log(ProductsContext)
  const [product, setproduct] = useState(null)
  const {id}=useParams();
  const navigate =useNavigate()
  
  const dlthandeler = (id)=>{
   const filterproduct = Products.filter((p)=> p.id !== id);
   setProducts(filterproduct);
    localStorage.setItem("Products", JSON.stringify(filterproduct));
    navigate("/");
  }

 useEffect(()=>{
  if (!product) {
    setproduct(Products.filter((p,i)=>p.id == id)[0]);
  }
 },[])



  //  const product = Products[id-1];
  return (<>
    {product && <div className=' bg-white w-full h-screen flex items-center justify-between  overflow-hidden'>
  <div className='w-[50%] h-[50%] '>
    <img className='mt-20 w-[50%] ml-[47%]   object-cover object-center' src={product.image} alt="" />
  </div>
  <div className=' w-[50%] p-8 '>
    <h1 className='text-2xl font-semibold '>{product.title}</h1>
    <h2 className='text-xl font-medium my-3'>{product.category}</h2>
    <h3 className='text-xl font-bold my-5'>{product.price}</h3>
    <p className=' mb-5 text-sm font-medium w-[85%] '>{product.description}</p>
   <div >
    <Link to={`/edit/${product.id}`}  className='px-5 py-2 bg-green-400 text-white rounded-md' >Edit</Link>
    <button onClick={()=>dlthandeler(product.id)} className=' ml-7 px-5 py-2 bg-red-400 text-white rounded-md' >Delete</button>
   </div>
  
  </div>

</div>
}
</>  
  )
}

export default Details