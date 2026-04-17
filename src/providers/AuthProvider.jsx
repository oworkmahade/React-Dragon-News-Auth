import { createContext, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const AuthContext = createContext(null);

const auth = getAuth(app);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
