import React,{useState} from "react";
const Sum=()=>{
    const[count,setCount]=useState(0);
    return (
        <div>
             <h1>Sum calculator</h1>
        <input
        type="number"
        onChange={(e)=>setCount(parseInt(count)+parseInt(e.target.value))}
        />
        <p>Sum: {count} </p>
        </div>
    )
}
export default Sum;