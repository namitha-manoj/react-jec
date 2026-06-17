import React from 'react'

const Useeffectexample = () => {
    const[count , setCount] = React.useState(0)
    React.useEffect(()=>{
        console.log("Use effect is Active")
    },[])
  return (
    <>
    <h1>UseEffect Example</h1>
    <h2>Count : {count}</h2>
    <button onClick={()=> setCount(count+1)}>Add</button>
    </>
   
  )
}

export default Useeffectexample