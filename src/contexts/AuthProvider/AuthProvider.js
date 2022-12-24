import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside onauthstatechanged', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    const authInfo = {
        user,
        googleSignIn,
        logOut,
        createuser,
        signIn,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;