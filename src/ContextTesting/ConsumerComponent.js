import React, {useContext} from "react";
import {AuthContext} from "./AuthProvider";

export const ConsumerComponent = () => {
    const {isLoggedIn, toggleLogin} = useContext(AuthContext);

    return (
        <>
            <input type="button" value="Login" onClick={toggleLogin}/>
            {isLoggedIn ? "Welcome!" : "Please, log in"}
        </>
    );
};