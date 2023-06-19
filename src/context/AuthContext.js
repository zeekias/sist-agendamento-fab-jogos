import React, { createContext, useState } from 'react';
import firebase, { loginWithEmail, loginWithGoogle, logout } from '../services/firebase';
import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const pushNotify = (statusUp='', titleUp='', textUp='' )=>{
        new Notify({
          status: statusUp,
          title: titleUp,
          text: textUp,
          effect: 'fade',
          speed: 300,
          customClass: null,
          customIcon: null,
          showIcon: true,
          showCloseButton: true,
          autoclose: true,
          autotimeout: 3000,
          gap: 20,
          distance: 20,
          type: 1,
          position: 'right top'
        })
      }

    const loginByGoogle = async () => {
        const result = await loginWithGoogle();

        if (result.status) {
            setUser(result.userToken);
            return { status: true, text: 'Login bem-sucedido!' };
        }

        return { status: false, text: 'Credenciais inválidas. Tente novamente.' };;

    }

    const loginWithEmail = async (email, password) => {
        try {
            console.log(email, password);
            const userCredential = await loginWithEmail(email, password);
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
        loginWithEmail,
        loginByGoogle,
        logoutContext,
        pushNotify
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
