import React from 'react'

const SamForm = () => {
  return (
    <>
    <h1>Form Task</h1>
    <form>
        <label htmlFor="username">Username :</label>
        <input type="text" id="username" name="username"/>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="Password"/>
        <br />
        <label htmlFor="confirm password">confirm Password :</label>
        <input type="password" id="password" name="confirm password"/>
        <br />
        <button type="submit">Submit</button>
    </form>
    
    </>
  )
}

export default SamForm