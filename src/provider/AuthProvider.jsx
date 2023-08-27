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
  updateProfile,
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

  // const updateUserData=(name,photoUrl,currentUser)=>{
  //   // return updateProfile(currentUser,{
  //   //   displayName:name,photoURL:photoUrl
  //   // })
    
  // }
  // }
  const updateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile)
  }

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

  
  const authInfo = { 
    loading,
    registerUser, 
    user, 
    logOut, 
    loginUser,
    updateUserProfile 
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;








