import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Menú Lateral */}
      <aside
        className="bg-primary text-white p-4"
        style={{ width: '250px', height: '100vh' }}
      >
        <ul className="list-unstyled">
          <li>
            <Link to="/clients" className="text-white text-decoration-none">
              Apartado de Clientes
            </Link>
          </li>
        </ul>
      </aside>

      {/* Contenido Principal */}
      <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {/* Encabezado */}
        <div
          style={{
            backgroundColor: '#ffffff', // Fondo blanco
            color: '#011c43', // Texto azul oscuro
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
            marginBottom: '20px',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '2.5rem', textAlign: 'center' }}>
            Bienvenido a Botbi
          </h1>
        </div>

        {/* Apartado de Clientes */}
        <section
          style={{
            backgroundColor: '#ffffff', // Fondo blanco
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
            maxWidth: '800px', // Reduce el tamaño
            margin: '0 auto', // Centrado horizontal
          }}
        >
          <h2 style={{ color: '#011c43', fontSize: '1.8rem' }}>
            Gestión de Clientes
          </h2>
          <p style={{ color: '#011c43' }}>
            Aquí puedes gestionar los datos de tus clientes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
