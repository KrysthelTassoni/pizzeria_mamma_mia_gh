import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { token, logout, getProfile } = useUser();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/login"); // Redirige al login si el token es false
    } else {
      const fetchProfile = async () => {
        try {
          const profile = await getProfile();
          setUserEmail(profile.email);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    }
  }, [token, navigate, getProfile]);

  const handleLogout = () => {
    logout(); // Llama a la función logout del UserContext
    navigate("/login"); // Redirige al login después de cerrar sesión
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
