import { createContext, useState,useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const logOut = () => {
    setCurrentUser(null);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("moddy"));
    if(user){
      setCurrentUser(user)
    }
  }, []);
  const value = { currentUser, setCurrentUser, logOut, setAdmin, admin };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default AuthProvider;
