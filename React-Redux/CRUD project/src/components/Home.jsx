import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import { ProductsContext } from "../utilis/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import axios from "../utilis/Axios";

const Home = () => {
  let [Products] = useContext(ProductsContext);
  // console.log(Products);
  const {search} =useLocation();
  // console.log(search);
  const category = decodeURIComponent(search.split("=")[1])
  
  const [catoProducts, setcatoProducts] = useState(null)
//  const productcatogery =async()=>{
//   try {
//     const {data} = await axios.get(`products/category/${category}`)
//      setcatoProducts(data);
//   } catch (error) {
//  console.log(error);    
//   }
//  }

 useEffect(()=>{
 if(!catoProducts || category == "undefined") setcatoProducts(Products);
 if(category != "undefined"){
  setcatoProducts(Products.filter(p => p.category == category)) }
 },[category,Products])
  return (
    <>
      {catoProducts && catoProducts ? (
        <>
          <Nav />
          <div className="w-[80%] h-full bg-zinc-300 pt-[2%] px-2 flex gap-2 flex-wrap overflow-x-hidden overflow-y-auto">
            {catoProducts.map((p,i) => (
              <Card key={i} value={p} />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
