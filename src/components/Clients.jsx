import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import botbiLogo from '../assets/botbi.png'; // Importa el logotipo

function Clients() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Para redirigir al usuario

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !email) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    alert(`Cliente registrado:\nNombre: ${name}\nDirección: ${address}\nCorreo: ${email}`);
    setName('');
    setAddress('');
    setEmail('');
  };

  return (
    <div
      style={{
        backgroundColor: '#011c43', // Fondo azul oscuro
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* Contenido del Formulario */}
      <div
        className="card"
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '30px',
          backgroundColor: '#ffffff', // Fondo blanco
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra suave
        }}
      >
        {/* Logotipo de Botbi */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src={botbiLogo}
            alt="Botbi Logo"
            style={{
              maxWidth: '150px', // Tamaño máximo del logotipo
              height: 'auto',
            }}
          />
        </div>

        <h2
          className="text-center"
          style={{
            color: '#011c43',
            fontSize: '2rem',
            marginBottom: '20px',
          }}
        >
          Gestión de Clientes
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#011c43' }}>
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: '12px', fontSize: '1rem' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#011c43' }}>
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ padding: '12px', fontSize: '1rem' }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#011c43' }}>
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '12px', fontSize: '1rem' }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ padding: '12px', fontSize: '1.1rem' }}
          >
            Registrar Cliente
          </button>
        </form>

        {/* Botón Circular para Regresar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={() => navigate('/main')} // Redirige a la página principal
            title="Regresar a la página principal" // Texto al pasar el cursor
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#ffffff', // Fondo blanco
              border: '2px solid #011c43', // Borde azul oscuro
              color: '#011c43', // Color de la flecha
              fontSize: '1.5rem',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
            }}
          >
            ←
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clients;


