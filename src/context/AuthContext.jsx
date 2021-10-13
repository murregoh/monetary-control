import React, { useContext, useState, useEffect } from "react";
import { auth } from '../firebase/firebase.config';

import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

// hook to get the context
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const suscription = onAuthStateChanged(auth, (user) => {
            debugger;
            setUser(user);
            setLoading(false);
        });

        return suscription;
    }, []);

    return (
        <AuthContext.Provider value={{ user: user }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext, useAuth }