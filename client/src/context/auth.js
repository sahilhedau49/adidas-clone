import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});
  const [errWhileLog, setErrWhileLog] = useState("");

  const emailLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
      setErrWhileLog(error);
    });
  };

  const SignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const status = onAuthStateChanged(auth, (user) => {
      setAdmin(user);
    });
    return () => {
      status();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        admin,
        emailLogIn,
        SignOut,
        errWhileLog,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
