import React, { useState } from 'react';

function Clients() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

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
      </div>
    </div>
  );
}

export default Clients;
