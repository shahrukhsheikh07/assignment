import React, { useState ,useEffect } from 'react'
import "./style.css";


const UseEffect = () => {
    const initialData = 0;
const [myNum , setMyNum] = useState(initialData);

useEffect(() => {
document.title = `Chats(${myNum})`;
} );

  return (
      <>
    <div className="center-div">
        <p>{myNum}</p>
        <div class = "button2" onClick={() => setMyNum(myNum + 1)
        } >
        <span></span>
        <span></span>
        <span></span>
        INCR
        </div>
        
    </div>
    </>
  )
}

export default UseEffect;