import React, { Children } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { createContext } from 'react';
const auth = getAuth(app)
export const AuthContext = createContext()



const Authprobider = ({children}) => {
     const user = {displayName: 'ali'}

     const loginProvider = (provider) =>{
          return signInWithPopup(auth, provider)
     }

     const authData = {user, loginProvider}
     return (
          <AuthContext.Provider value={authData}>
               {children}
          </AuthContext.Provider>
     );
};

export default Authprobider;