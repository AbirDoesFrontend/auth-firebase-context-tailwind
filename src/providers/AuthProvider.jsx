import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app)

export const  AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    } 

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth , currentUser => {
        console.log('auth state change' , currentUser)
        setUser(currentUser)
      })

      return () => {
        unsubscribe();
      }

    }, [])
    

    const authInfo = {
        createUser,
        signIn,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;