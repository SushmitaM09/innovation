import { useEffect, useState } from "react";

export default function Hook() {
 
const [y] =useState(30);

  // const increase=()=>{
  //   setY(y+1)
  // }

  useEffect(()=>{

    console.log("hello")
  },[]
  )
      return (
          <>
      {/* <button onClick={increase}>increase</button>
      [x]
        <hr/> */}
        {y}
    </>
  );
}
