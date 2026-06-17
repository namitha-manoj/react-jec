import React from 'react'
import{useState}from"react";
import{FcLike}from"react-icons/fc";
function ArrayTask(){
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
    const[count,setCount]=useState(0);
    const handleClick=() =>{
        {
        setCount(count+1);
        }
    };

    return(
        <div className="container">
            <h2>
                Likes:{count}{reactionArray[count]}
            </h2>
            <FcLike
            size={40}
            onClick={handleClick}
            style={{cursor:"pointer"}}
            />
            
        </div>
    );
}
export default ArrayTask;