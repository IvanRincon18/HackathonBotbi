import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Barra Lateral Pegada a la Izquierda */}
      <aside
        className="bg-primary text-white"
        style={{
          width: '250px', // Ancho fijo de la barra lateral
          height: '100vh', // Altura completa de la pantalla
          position: 'fixed', // Fija la barra en el lado izquierdo
          top: '0',
          left: '0',
          padding: '20px',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Menú</h2>
        <ul className="list-unstyled">
          <li>
            <Link
              to="/clients"
              className="text-white text-decoration-none"
              style={{
                fontSize: '1.2rem',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Apartado de Clientes
            </Link>
          </li>
        </ul>
      </aside>

      {/* Contenido Principal */}
      <main
        style={{
          marginLeft: '250px', // Ajusta el contenido para dejar espacio a la barra lateral
          flex: 1,
          padding: '20px',
          backgroundColor: '#f8f9fa', // Fondo claro para el contenido principal
          overflowY: 'auto',
        }}
      >
        {/* Encabezado "Bienvenido a Botbi" */}
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

        {/* Gestión de Clientes */}
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
