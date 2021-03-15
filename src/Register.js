import React from 'react'
import {Link} from "react-router-dom";
import  "./Register.css";


function Register() {
    return (
        <div className="Register">
         <Link to='/'>
            <img 
            className='login_logo1'
            src="Flipkart_ED.jpg" alt=""/>

         </Link>
         <div className='Register_container'>
             <h1>Register </h1>

             <form>
         <h5>E-mail</h5>
         <input type='text'/>

         <h5>Password</h5>
         <input type='password'/>

         <h5>Confirm Password</h5>
         <input type='password'/>

         <button type='submit' 
          className="login_signInButton"><h2>Sign In</h2></button>

         <p>
         By continuing, you agree to Conditions of 
         Use and Privacy Notice.
         </p>
       
      
         

        </form>


             
             
             
             </div>

            
        </div>
    )
}

export default Register
