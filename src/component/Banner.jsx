import { useState } from "react"

export default function Banner(){

    const[ count,setCount ]=useState(0);

    return (
        <div className="banner card">
            <h1>this is banner</h1>
            {count}
            <button className={()=>{setCount(count+1)}}>increase</button>
            
            {/* <div className="title">This is a title</div>
            <button className="btn btn-success btn-lg ">
                Read me
            </button>
            <div className="Email">Send your Email</div>
            <button type="submit" className="btn btn-warning btn-sm">Mail</button>
            <a href="" className="btn btn-secondary">hello</a>
            <input type="date" /> */}
        </div>
    
    )
}