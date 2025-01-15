import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import botbiLogo from '../assets/botbi.png'; // Importa el logotipo

function MainPage() {
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleLogout = () => {
    // Lógica adicional para cerrar sesión si es necesario
    navigate('/'); // Redirige al Login
  };

  const buttonStyle = {
    width: '100%', // Asegura que el botón ocupe el ancho completo de la barra lateral
    backgroundColor: '#ffffff', // Fondo blanco
    color: '#011c43', // Texto azul oscuro
    padding: '10px 15px', // Espaciado interno
    border: '2px solid #011c43', // Borde azul oscuro
    borderRadius: '8px', // Bordes redondeados
    textAlign: 'center', // Centrado del texto
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera
    fontSize: '1rem', // Tamaño de fuente consistente
    cursor: 'pointer', // Cursor de puntero
    display: 'block', // Botón como bloque para consistencia
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Barra Lateral Pegada a la Izquierda */}
      <aside
        className="bg-light"
        style={{
          width: '300px',
          height: '95vh',
          position: 'fixed',
          top: '0',
          left: '0',
          padding: '20px',
          boxShadow: '2px 0 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Logotipo de Botbi */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src={botbiLogo}
            alt="Botbi Logo"
            style={{
              maxWidth: '180px',
              height: 'auto',
            }}
          />
        </div>

        <h2
          style={{
            fontSize: '1.5rem',
            color: '#011c43',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Menú
        </h2>

        <ul className="list-unstyled" style={{ padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <Link to="/clients" className="text-decoration-none" style={buttonStyle}>
              Apartado de Clientes
            </Link>
          </li>

          {/* Acerca de */}
          <li style={{ marginBottom: '15px' }}>
            <a
              href="https://botbi.io/article.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={buttonStyle}
            >
              Acerca de
            </a>
          </li>

          {/* Página Oficial */}
          <li style={{ marginBottom: '15px' }}>
            <a
              href="https://botbi.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={buttonStyle}
            >
              Página Oficial
            </a>
          </li>

          {/* Botón Salir */}
          <li style={{ marginBottom: '15px' }}>
            <button onClick={handleLogout} style={buttonStyle}>
              Salir
            </button>
          </li>
        </ul>
      </aside>

      {/* Contenido Principal */}
      <main
        style={{
          marginLeft: '-100px',
          flex: 1,
          padding: '75px',
          backgroundColor: '#f8f9fa',
          overflowY: 'auto',
          height: '95vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Encabezado "Bienvenido a Botbi" */}
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#011c43',
            padding: '50px',
            borderRadius: '16px',
            border: '2px solid #011c43',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            marginBottom: '40px',
            fontSize: '2.2rem',
          }}
        >
          <h1 style={{ margin: 0, textAlign: 'center' }}>
            Bienvenido a Botbi
          </h1>
        </div>

        <section
          style={{
            backgroundColor: '#ffffff',
            padding: '60px',
            borderRadius: '16px',
            border: '2px solid #011c43',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            marginBottom: '30px',
            height: '45vh',
          }}
        >
          <h2 style={{ color: '#011c43', fontSize: '2rem' }}>
            Gestión de Clientes
          </h2>
          <p style={{ color: '#011c43', fontSize: '1.2rem' }}>
            Aquí puedes gestionar los datos de tus clientes de forma eficiente.
          </p>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
