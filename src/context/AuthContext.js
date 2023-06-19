import React, { createContext, useState } from 'react';
import firebase, { loginWithEmail, logout } from '../services/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const login = async (email, password) => {
        try {
            console.log(email, password);
            const userCredential = await loginWithEmail(email, password);
            console.log("aaaa", userCredential);
            if (userCredential) {
                setUser(userCredential.user.accessToken);
                return { status: true, text: 'Login bem-sucedido!' };
            }
            return { status: false, text: 'Credenciais inválidas. Tente novamente.' };
        } catch (error) {
            console.log(error);
        }
    };

    const logoutContext = async () => {
        try {
            await logout();
            setUser('');
            console.log('Logout realizado com sucesso!');
        } catch (error) {
            console.log('Erro ao realizar logout.', error);
        }
    };

    // Valor fornecido pelo provedor do contexto
    const authContextValue = {
        user,
        login,
        logoutContext
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};