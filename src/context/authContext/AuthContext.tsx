import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
// Definir la informacion que se va a guardar 

export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// El estado Inicial
export const authInitialState: AuthState= {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Interface que permitira a React como luce y que expone la informacion
export interface AuthContextProps {
    authState : AuthState;
    singIn: () => void;
    singOut: () => void;
}

// Crear el context que se va a compartir, 
//tambien se ofrecen metodos para cambiar el estado
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({  children  }: any) => {

    const [ authState, dispatch] = useReducer(authReducer, authInitialState)
    
    const signIn= () => {
        dispatch({ type: 'signIn'})
    }
    const signOut= () => {
        dispatch({ type: 'signOut'})
    }
    return (
        <AuthContext.Provider value={{
            authState,
            singIn: signIn,
            singOut: signOut
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}