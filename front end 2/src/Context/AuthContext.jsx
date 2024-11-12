// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const response = await axios.post('http://localhost:6500/users/signin', { email, password });
        setUser(response.data); // Assuming the token is returned
        localStorage.setItem('token', response.data.token); // Store JWT
    };

    const register = async (data) => {
        const response = await axios.post('http://localhost:6500/users/signup', data);
        setUser(response.data); // Assuming the token is returned
        localStorage.setItem('token', response.data.token); // Store JWT
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
