import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import "../App.css";
import background from "../assets/loginBackground.png"
import { Login } from '../components/Login';
import { Register } from '../components/Register'; 


function Home({ user }) {
 const [isSignUp, setIsSignUp] = useState(false);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');


 const handleChange = () => {
   setIsSignUp(!isSignUp);
 };


 const handleSubmit = (event) => {
   event.preventDefault();
   if (isSignUp) {
     // Handle signup logic using createUserWithEmailAndPassword
   } else {
     // Handle login logic using signInWithEmailAndPassword
   }
 };


 const handleEmailChange = (event) => {
   setEmail(event.target.value);
 };


 const handlePasswordChange = (event) => {
   setPassword(event.target.value);
 };


 if (user) {
   return <Navigate to="/private" />;
 }


 return (
   <div className='formContainer'>
   
     <img src={background} className='loginBackground' alt="Background"></img>
     


     <div className='loginForm'>
      
      
       {isSignUp ? <Register togglePage={handleChange} /> : <Login togglePage={handleChange} />}


     </div>
  
   </div>
 );
}


export default Home;





