import React from 'react'
import "./profile.css";



    const Profile = () => {
      const userEmail = "usuario@example.com";
    
      const handleLogout = () => {
        console.log("Cerrando sesión...");
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
    

