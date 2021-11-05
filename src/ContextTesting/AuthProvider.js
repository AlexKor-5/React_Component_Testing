import React, {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, toggleLoginStatus] = useState(false);

    const toggleLogin = () => {
        toggleLoginStatus(!isLoggedIn);
    };

    return (
        <AuthContext.Provider value={{toggleLogin, isLoggedIn}}>
            <div>Message: {children}</div>
        </AuthContext.Provider>
    );
};