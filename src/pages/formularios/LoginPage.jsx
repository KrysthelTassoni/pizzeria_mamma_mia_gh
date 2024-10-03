import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Todos los campos son obligatorios");
    } else if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
    } else {
      try {
        await login(email, password);
        setMessage("¡Inicio de sesión exitoso!");
        navigate('/profile'); // Redirige al perfil después del login exitoso
      } catch (error) {
        if (error.message.includes("400")) {
          setMessage("Usuario no registrado o contraseña incorrecta");
        } else {
          setMessage("Error al iniciar sesión: " + error.message);
        }
        console.error("Login error:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        {message && <div className="alert alert-info">{message}</div>}
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
