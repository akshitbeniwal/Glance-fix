import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithPhoneNumber } from "firebase/auth";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentuser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(auth, phoneNumber, appVerifier) {
    console.log("in auth constext");
    console.log(currentuser, " in login");
    return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(" use effect");
      setLoading(false);
      console.log(currentuser);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentuser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
