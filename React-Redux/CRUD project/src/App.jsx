import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Home from "./components/Home";
import Details from "./components/Details";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";



const App = () => {
 const {search ,pathname}= useLocation();
//  console.log(search)
//  console.log(pathname)
  return (
    <div className=" relative w-full h-screen bg-zinc-200 flex">
   
  {(pathname != "/"|| search.length>0) && <Link className=" px-2 py-2 absolute left-[20%]" to ="/">Home</Link>}
   

    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/details/:id" element={<Details/>}></Route>
     <Route path="/edit/:id" element={<Edit/>}></Route>
     <Route path="/create" element={<Create/>}></Route>
     

      
    </Routes>
    </div>
  );
};

export default App;
