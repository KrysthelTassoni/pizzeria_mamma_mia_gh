import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto
const UserContext = createContext();

// Hook para acceder al contexto
export const useUser = () => useContext(UserContext);

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  // Función para login
  const login = async (email, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Función para register
  const register = async (email, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  // Función para logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    navigate("/login"); // Redirige al login después de cerrar sesión
  };

  // Función para obtener el perfil del usuario autenticado
  const getProfile = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Get profile error:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};