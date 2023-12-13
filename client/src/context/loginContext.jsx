import {createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLog = () => useContext(LoginContext);

function LoginContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
    const [auth, setAuth] = useState({ token: localStorage.getItem("token")});
    
    const contextValue = {
        isLoggedIn,
        setIsLoggedIn,
        userId,
        setUserId,
        userName,
        setUserName,
        auth,
        setAuth
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContextProvider };