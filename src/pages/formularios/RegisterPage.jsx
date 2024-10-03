import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      setMessage('El password debe tener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
      setMessage('El password y la confirmación deben ser iguales');
    } else {
      try {
        await register(email, password);
        setMessage('Registro exitoso');
        navigate('/profile'); // Redirige al perfil después del registro exitoso
      } catch (error) {
        setMessage('Error al registrarse: ' + error.message);
        console.error('Error al registrarse:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {message && <div className="alert alert-info">{message}</div>}
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
