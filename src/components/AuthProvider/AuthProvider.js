import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../../firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const provider2 = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const googleSignin = () => {
        return signInWithPopup(auth, provider)
    }
    const githubSignIn = () => {
        return signInWithPopup(auth, provider2)
    }
    const registretion = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        // setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    console.log(user)
    const authInfo = { registretion, updateUserProfile, signinUser, googleSignin, githubSignIn, logOut, user, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;