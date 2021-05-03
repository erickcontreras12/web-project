import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  function signUp(email, password){
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function logIn(email, password){
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    console.log('Out');
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log('Change', user);
      setCurrentUser(user);
      setLoading(false);
    })
  
    return unsubscribe;
  }, [])

  
  const value = {
    currentUser,
    logged,
    logIn,
    signUp,
    logOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider