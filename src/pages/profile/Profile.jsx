import React, { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { token, logout } = useUser();
  const navigate = useNavigate();
  const userEmail = "usuario@example.com";

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirige al login si el token es false
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout(); // Llama a la función logout del UserContext
  };

  return (
    <div className="container text-center mt-5">
      <h2>Perfil de Usuario</h2>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout} className="btn btn-primary">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
