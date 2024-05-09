import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.confg";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
  
    const googleProvider = new GoogleAuthProvider();
  
    //register create account
    const createSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    //   sign in account
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOut = () => {
      return signOut(auth)
    }
  
    const google = () => {
    return signInWithPopup(auth, googleProvider)
    }
  
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("current value of the current user", currentUser);
        setUser(currentUser);
        setLoading(false)
      })
      return () => {
          unsubscribe()
      }
    }, []);
  
    const authInfo = {
      createSignUp,
      signIn,
      user,
      logOut,
      loading, 
      setLoading,
      google,
    };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
