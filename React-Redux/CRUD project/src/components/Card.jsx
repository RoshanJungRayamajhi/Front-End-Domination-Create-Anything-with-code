import React from "react";
import { Link } from "react-router-dom";

const Card = ({value}) => {
  return (
    <>
      <Link to= {`/details/${value.id}`} className="m-2 px-1 border shadow-xl w-[20%] h-[35vh] flex flex-col items-center justify-center">
        <div
          className=" hover:scale-105 my-1 w-full h-[80%] bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage:
              `url(${value.image})`,
          }}
        ></div>
        <h1 className=" my-4 text-sm font-medium">{value.title}</h1>
    </Link>
    </>
  );
};

export default Card;
