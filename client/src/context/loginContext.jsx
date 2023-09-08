import {createContext, useContext, useState } from 'react';

const LoginContext = createContext();

function LoginContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState("");
    
    const contextValue = {
        isLoggedIn,
        setIsLoggedIn,
        userId,
        setUserId,
        userName,
        setUserName
    };

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    )
}

function useLogin() {
    const context = useContext(LoginContext);
    if (context === undefined) {
        throw new Error('useLogin must be used within a LoginContextProvider');
    }
    return context;
}

export { LoginContextProvider, useLogin };