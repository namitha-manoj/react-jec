import React from 'react'

import{useState}from"react";
import { FaHeart } from "react-icons/fa";
const reactionArray=[
 "😞",
 "😟",
 "😕",
 "☹️",
 "😐",
 "🙂",
 "😊",
 "☺️",
 "😁",
 "😄",
 "😃",
 "😍"
];
function ArrayTask(){
    const[count,setCount]=useState(0);
    const handleClick=() =>{
        if(count<reactionArray.length-1){
            setCount(count+1);
        }
    };
    return(
        <div className="container">
            <h2>
                Likes:{count} {reactionArray[count]}
            </h2>
            <FaHeart 
            size={40}
            onClick={handleClick}
            style={{cursor:"pointer"}}
            />
            
        </div>
    );
}
export default 