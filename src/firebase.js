import  firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYOtlsRQNH268kLi8EwRZxiWKZwoSXzFM",
    authDomain: "bringmakesshop.firebaseapp.com",
    projectId: "bringmakesshop",
    storageBucket: "bringmakesshop.appspot.com",
    messagingSenderId: "767995255703",
    appId: "1:767995255703:web:89e17d24435b415dae42d2",
    measurementId: "G-1LVRKST6H6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth(); 
  
  export {db , auth};

 export default firebase