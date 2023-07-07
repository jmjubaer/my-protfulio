import { createContext } from "react";

/* eslint-disable react/prop-types */
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;