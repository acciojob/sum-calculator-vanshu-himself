
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[count,setCount]=useState(0);
  // function add(){
  //   let sum=count;
  //   setCount(sum+)
  // }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum calculator</h1>
        <input
        type="number"
        onChange={(e)=>setCount(parseInt(count)+parseInt(e.target.value))}
        />
        <p>Sum: {count} </p>
    </div>
  )
}

export default App
