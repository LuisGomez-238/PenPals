// import React from 'react';
import logo from "../assets/logo.png"

export const Login = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any additional logic for form submission if needed
  };

  return (
    <div className='formContainer'>
      <div className='loginForm'>
        {<img src={logo} alt="Logo" />}
        <span className='logo'>PenPals</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button type="submit">Login</button>
        </form>
        <p className='work'>
          <button onClick={props.togglePage}>Sign up here</button>
        </p>
      </div>
    </div>
  );
}



