import React, { Children, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { createContext } from 'react';
import { useState } from 'react';
const auth = getAuth(app)
export const AuthContext = createContext()



const Authprobider = ({children}) => {
     const [user, setUser] = useState(null)
    
     const loginProvider = (provider) =>{
          return signInWithPopup(auth, provider)
     }

     const createUser = (email, passowrd) =>{
          return createUserWithEmailAndPassword(auth, email, passowrd)
     }

     const signIn = (email, passowrd) =>{
          return signInWithEmailAndPassword(auth, email, passowrd)
     }

     const logOut = () =>{
          return signOut(auth)
     }

     useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth,(recentUser) =>{
               setUser(recentUser)
          })

          return () => {
               unsubscribe();
          }

     },[])

     const authData = {user, loginProvider, logOut, createUser, signIn,setUser}
     return (
          <AuthContext.Provider value={authData}>
               {children}
          </AuthContext.Provider>
     );
};

export default Authprobider;