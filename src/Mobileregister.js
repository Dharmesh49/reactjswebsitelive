import React, {Component} from 'react'
import  "./Mobileregister.css";
import firebase from "./firebase";
import {Link} from "react-router-dom";

export default class Mobileregister extends Component{
    

    setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recptcha-container", 
            {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              this.onSignInSubmit();
            }
          });
         }; 
    

         onSignInSubmit = (event)=> {
        event.preventDefault();
        this.setUpRecaptcha();
        

            const phoneNumber = "+918291119621";
            const appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then((confirmationResult) => {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  window.confirmationResult = confirmationResult;

                  const code = window.prompt("Enter OTP");
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.

 
  const user = result.user;
  console.log("User is signed in ")
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});

                  // ...
                }).catch((error) => {
                  // Error; SMS not sent
                  // ...
                });
                 };




    render() {
     return(

        <div className="Mobile">
        <Link to='/'>
           <img 
           className='Mobile_logo'
           src="Flipkart_ED.jpg" alt=""/>

        </Link>

<div className='Mobile_container'>

<form onSubmit={this.onSignInSubmit}>
<div id ="recptcha-container"></div>

<h5> Enter Phone Number</h5>
<h5></h5>
        <input type='number'  />

        <button type='submit' 
         className="login_signInButton1"><h2>submit</h2></button>



</form>
</div>
</div>
 );
     }
    }




