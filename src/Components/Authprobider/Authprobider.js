import React, { Children, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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

     useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth,(recentUser) =>{
               setUser(recentUser)
          })

          return () => {
               unsubscribe();
          }

     },[])

     const authData = {user, loginProvider}
     return (
          <AuthContext.Provider value={authData}>
               {children}
          </AuthContext.Provider>
     );
};

export default Authprobider;