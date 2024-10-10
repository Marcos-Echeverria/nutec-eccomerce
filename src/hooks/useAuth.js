import { useEffect, useState } from 'react';
import { useAuth as useAuthContext } from '../context/AuthContext';
import { loginUser } from '../services/userService'; 

export const useAuth = () => {
    const { user, setUser } = useAuthContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, [setUser]);

    const login = async (credentials) => {
        try {
            const response = await loginUser(credentials); // Usamos el servicio loginUser
            setUser(response.user); // Guardamos el usuario en el estado
            localStorage.setItem('user', JSON.stringify(response.user)); // Persistimos el usuario en localStorage
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const isAuthenticated = () => !!user;

    return {
        user,
        loading,
        login,
        logout,
        isAuthenticated,
    };
};
