import React from 'react';
import Add from "../assets/user-circle-solid-24.png"
import logo from "../assets/logo.png"

export const Register = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any additional logic for form submission if needed
  };

  return (
    <div className='formContainer'>
      <div className='loginForm'>
        {<img src={logo} alt="Logo" />}
        <span className='logo'>PenPals</span>
        <span className='logo'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input id="fileInput" type="file" style={{ display: "none" }} />
          {/* <label htmlFor="fileInput">
            <img src={Add} alt="Add Avatar" />
            <span>Add an avatar (optional)</span>
          </label> */}
          <button type="submit">Sign up</button>
        </form>
        <p className='work'>
          You do have an account?{' '}
          <button onClick={props.togglePage}>Login</button>
        </p>
      </div>
    </div>
  );
}





