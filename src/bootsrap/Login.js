import React from 'react';
 import firebaseConfig from '../bootsrap/Login';
 import * as firebase from "firebase/app";
 import "firebase/auth";
import {  usercontext } from '../App';
import useContext from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
   
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    const[loggedin,setloggedin]=useContext(usercontext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handle=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
           
            const {displayName,email}  = result.user;
            const signUser={name:displayName,email};
            setloggedin(signUser);
            history.replace(from);

            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });
    }
    return (
        <div>
            HELLO LOGIN

            <button className='btn btn danger' onClick={handle}>sign in google</button>
        </div>
    );
};

export default Login;