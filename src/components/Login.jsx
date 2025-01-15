import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import botbiLogo from '../assets/botbi.png'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([
    { username: 'testuser', password: '1234' }, // Usuario de prueba
  ]);

  const navigate = useNavigate();

  // Maneja el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();

    const userExists = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      alert('Inicio de sesión exitoso.');
      navigate('/main'); // Redirige a la página principal
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  
  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    if (!newUser.username || !newUser.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    
    const userExists = registeredUsers.find(
      (user) => user.username === newUser.username
    );

    if (userExists) {
      alert('El usuario ya existe.');
      return;
    }

    setRegisteredUsers([...registeredUsers, newUser]);
    alert('Usuario registrado exitosamente.');
    setShowRegisterModal(false); // Cierra el modal
  };

  return (
    <div
      style={{
        backgroundColor: '#011c43',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: '500px',
          width: '100%',
          padding: '30px',
          color: '#000',
          borderRadius: '10px',
        }}
      >
        <div className="card-body text-center">
          <img
            src={botbiLogo}
            alt="Botbi Logo"
            style={{
              display: 'block',
              margin: '0 auto 20px',
              maxWidth: '180px',
              height: 'auto',
            }}
          />
          <h1 className="text-center" style={{ color: '#011c43', fontSize: '2.5rem' }}>
            Bienvenido!
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#000' }}>
                Usuario
              </label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ padding: '12px', fontSize: '1rem' }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#000' }}>
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '12px', fontSize: '1rem' }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ padding: '12px', fontSize: '1.1rem' }}
            >
              Iniciar Sesión
            </button>
          </form>
          <button
            className="btn btn-secondary w-100 mt-3"
            onClick={() => setShowRegisterModal(true)}
            style={{ padding: '12px', fontSize: '1.1rem' }}
          >
            Registrar Usuario
          </button>
        </div>
      </div>

      {/* Modal de registro */}
      {showRegisterModal && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className="card"
            style={{
              maxWidth: '400px',
              width: '100%',
              padding: '20px',
              backgroundColor: '#ffffff',
              borderRadius: '10px',
            }}
          >
            <h2 className="text-center mb-4">Registrar Usuario</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Usuario</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
                style={{ padding: '12px', fontSize: '1.1rem' }}
              >
                Registrar
              </button>
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={() => setShowRegisterModal(false)}
                style={{ padding: '12px', fontSize: '1.1rem' }}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
