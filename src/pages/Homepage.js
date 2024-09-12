import About from "./../component/About";
import Banner from "../component/Banner";
import { FaBeer } from "react-icons/fa";
import {useState} from 'react';
import Fetch from "./Fetch";
export default function Homepage() {
  const [count,setCount]=useState(true);
  return (
    <>
    {/* <h3> Lets go for a <FaBeer />? </h3> */}
      <About tag={"Homepage"}carr={[1,2,3,4]} count={count} />
      <Banner count={count} setCount={setCount}/>
      <Fetch/>
    </>
  );
}
