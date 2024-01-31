import React, { useContext } from 'react'
import { ProductsContext } from '../utilis/Context'
import { Link } from 'react-router-dom';

const Nav = () => {
const [Products] = useContext(ProductsContext);
// console.log(Products);
const distinct_category = Products && Products.reduce((acc,cv)=>[...acc,cv.category],[])
const filter = [...new Set(distinct_category)]
// console.log(filter)

const color=()=>{
  return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()},0.4)`
}

  return (
    <>
      <nav className=" w-[20%] h-screen flex flex-col items-center p-5">
        <Link to="/create"
          className=" text-xl font-semibold border-4 border-white px-5 py-2  "
          href="/create"
        >
          Add items
        </Link>
        <hr className="w-full h-[2px] mt-2" />
        <h1 className=" whitespace-nowrap w-[80%] text-[2vw] font-semibold">
          category Filter
        </h1>
        {filter.map((c, index) => (
          <div key={index} className="w-[80%] mt-4">
            <Link to={`/?category=${c}`} className=" pl-2 text-xl mb-3 flex items-center gap-1">
              {" "}
              <span style={{backgroundColor:color()}} className=" inline-block w-[20px] h-[20px] rounded-full bg-yellow-300"></span>
              {c}
            </Link>
      
          </div>
        ))}
      </nav>
    </>
  );
}

export default Nav