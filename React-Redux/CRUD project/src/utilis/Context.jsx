import axios from "./Axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();
const Context = (props) => {
  const [Products, setProducts] = useState();
  const getproducts = async () => {
    try {
      const { data } = await axios("products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <ProductsContext.Provider value={[Products, setProducts]}>
        {props.children}
      </ProductsContext.Provider>
    </div>
  );
};

export default Context;
