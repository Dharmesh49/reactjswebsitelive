import React, {useState} from 'react'
import './login.css'
import {Link, useHistory} from "react-router-dom";
import  { auth } from "./firebase";

function Login() {

  const history = useHistory(); 
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
   

  const signIn = e =>{
        e.preventDefault();

     auth
     .signInWithEmailAndPassword(email,password)
     .then(auth =>{
           history.push('/')
     })
     .catch(error => alert(error.message))
  
  
    }

  const register = e =>{
       e.preventDefault();
       auth
       .createUserWithEmailAndPassword(email,password)
       .then((auth) => {
         if(auth){
           history.push('/')
         }  
})
       .catch(error => alert(error.message))

  }


    return (
        <div className='login'>
       
        <Link to='/'>
            <img 
            className='login_logo'
            src="Flipkart_ED.jpg" alt=""/>

         </Link>
        
         <div className='login_container'>
             <h1>Sign-in</h1>
        <form>
         <h5>E-mail</h5>
         <input type='text' value={email}
             onChange= {e => setEmail(e.target.value)}
         />

         <h5>Password</h5>
         <input type='password' value={password}
             onChange= {e => setPassword(e.target.value)}
         />

         <button type='submit' onClick={signIn}
          className="login_signInButton"><h2>Sign In</h2></button>

         <p>
         By continuing, you agree to Conditions of 
         Use and Privacy Notice.
         </p>
         <Link to='/Register'>
         <button 
          className="login_registerButton">Create Your New Account</button>
          </Link>
               
               <h3 className='orr'>OR</h3>

               <Link to='/Mobileregister'>
         <button 
          className="login_registerButton">Create Account With Your Phone</button>
         </Link> 

        </form>



         </div>


        </div>
    )
}

export default Login
