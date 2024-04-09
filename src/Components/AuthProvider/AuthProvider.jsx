import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);
   

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    function registerUser(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    function loginUser(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function googleLogin(){
        signInWithPopup(auth,googleProvider)
    }

    function facebookLogin(){
        signInWithPopup(auth,facebookProvider)
    }

    const authInfo = {
        registerUser,
        loginUser,
        googleLogin,
        facebookLogin

    }

    
    return (
        <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>            
        </div>
    );
};

export default AuthProvider;