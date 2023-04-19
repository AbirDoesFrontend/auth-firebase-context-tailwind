import React, { createContext } from 'react';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app)

export const  AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    } 

    const authInfo = {
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;