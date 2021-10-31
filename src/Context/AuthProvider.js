import React, { createContext } from 'react';
import useFirebase from '../Components/hooks/useFirebase';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const useContect = useFirebase()
    return (
        <AuthContext.Provider value = {useContect}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;