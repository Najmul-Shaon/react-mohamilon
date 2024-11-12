import React, { createContext } from "react";

export const AuthContext = createContext(null);

const authInfo = {
  name: "River",
};

const AuthProviders = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
