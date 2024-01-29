import React, { useState, useEffect } from "react";

function Loading() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     setVisible(false);
//   }, []); // The empty dependency array ensures that the effect runs only once

  return  (
    <div className="flex flex-col items-center justify-center w-[85vw] h-full ">
      <h1 className="text-4xl">Loading</h1>
      <img
        className="object-contain w-full h-[70vh]"
        src="https://i.pinimg.com/originals/97/e9/42/97e942ce7fc4e9d4ea6d844a382f251f.gif"
        alt=""
      />
    </div>
  )
}

export default Loading;
