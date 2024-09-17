import { createContext, useContext, useState } from "react";

// Crear el contexto
const UserContext = createContext();

// Hook para acceder al contexto
export const useUser = () => useContext(UserContext);

// Proveedor de contexto
export const UserProvider = ({ children }) => {
  // Estado para el token, por defecto será true según lo solicitado en el hito
  const [token, setToken] = useState(true);

  // Función para login
  const login = (newToken) => {
    setToken(newToken);
  };

  // Función para logout que cambia el token a false
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
