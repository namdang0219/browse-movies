import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseConfig";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({props, children}) => {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user))
  }, [])
  const values = {currentUser}
  return <AuthContext.Provider value={values} {...props}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if(typeof context === 'undefined') throw new Error('useAuth must be used within AuthProvider')
  return context
}

export {AuthProvider, useAuth}