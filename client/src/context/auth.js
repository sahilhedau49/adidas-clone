// import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// import { auth, provider } from "../Firebase";
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={
        {
          /* Things to export */
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
