import React from 'react'
import Childcomp from './Childcomp'

const Parentcomp = () => {
  return (
    <>
    <h1>Parent comp</h1>
    <Childcomp name = "Namitha" dept = "CSE"></Childcomp>
     </>
  )
}

export default Parentcomp