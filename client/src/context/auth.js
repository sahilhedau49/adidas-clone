import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const SignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign out successfully...");
    });
  };

  useEffect(() => {
    const status = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      status();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        SignIn,
        SignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
