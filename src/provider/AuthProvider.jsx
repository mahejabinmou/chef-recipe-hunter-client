/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,loggedUser=>{
      // console.log("logged in user with auth state",loggedUser);
      setUser(loggedUser);
      setLoading(false);
    })
    return()=>{
      unSubscribe();
    }
  },[])

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { 
    loading,
    registerUser, 
    user, 
    logOut, 
    loginUser 
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;








// import React, { createContext } from 'react';
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     signInWithEmailAndPassword,
//   } from "firebase/auth";
// import { app } from '../firebase/firebase.config';


// export const AuthContext=createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
    
//     const authInfo = { registerUser, user, logOut, loginUser };
//     return (
//         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
 
//     );
// };

// export default AuthProvider;