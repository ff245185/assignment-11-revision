import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loding,setLoding] = useState();
    const googleProvider = new GoogleAuthProvider();

    // google signing
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // email and password signing
    const continueWithEmailAndPass = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign out
    const userLogOut = () => {
        localStorage.clear();
        return signOut(auth);
    };

    // login with password
    const loginWithEmailAndPass = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoding(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authinfo = {
        continueWithGoogle,
        loginWithEmailAndPass,
        userLogOut,
        continueWithEmailAndPass,
        user,
        setLoding,
        loding
    };

    return (
        <div>
            <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
