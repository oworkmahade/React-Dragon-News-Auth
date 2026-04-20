import { createContext, useState,useEffect } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// creating context API and export it.
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// Add and initialize the Authentication SDK
const auth = getAuth(app);

// auth  provider component is responsible for providing the authentication context to its child components.
function AuthProvider({ children }) {
  // state declaration for user used in observer (unsubscribe)
  const [user, setUser] = useState(null);

  // register / sign-up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login / unsubscribe
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout / sign-out
  const logOut = () => {
    return signOut(auth);
  };
  // setting an observer, getting currently signed-in user and putting into user state

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "Observing current user inside useEffect of AuthProvider",
        currentUser,
      );
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // value to pass to all child
  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
