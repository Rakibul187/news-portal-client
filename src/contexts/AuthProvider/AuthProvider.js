import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log('inside onauthstatechanged', currentUser)
            setUser(currentUser)
        })
    }, [])

    const googleSignIn = (provider) => {
        signInWithPopup(auth, provider)
    }

    const authInfo = { user, googleSignIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;