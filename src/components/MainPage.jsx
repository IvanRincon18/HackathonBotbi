import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import botbiLogo from '../assets/botbi.png';
import { ClientsContext } from '../components/ClientsContext';

function MainPage() {
  const { clients, updateClient, setClients } = useContext(ClientsContext);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSaveEdit = async () => {
    // Construir la dirección completa para calcular coordenadas
    const { calle, numero, colonia, ciudad, codigoPostal } = editData;
    const address = `${calle} ${numero}, ${colonia}, ${ciudad}, ${codigoPostal}`;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyA7EDj7-PDvjN2p7orn64kafmt6yTWPhl0`
      );

      const data = await response.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        const updatedData = { ...editData, coordenadas: location };
        updateClient(editingIndex, updatedData); // Actualizar cliente en el contexto
      } else {
        alert('No se pudieron actualizar las coordenadas.');
      }
    } catch (error) {
      alert('Error al actualizar las coordenadas.');
    }

    setEditingIndex(null); // Salir del modo de edición
    setEditData(null); // Limpiar datos de edición
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditData(null);
  };

  const handleDeleteClient = (index) => {
    const newClients = clients.filter((_, i) => i !== index);
    setClients(newClients);
  };

  const buttonStyle = {
    display: 'block',
    backgroundColor: '#ffffff',
    color: '#011c43',
    padding: '10px 15px',
    border: '2px solid #011c43',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem',
  };

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Barra Lateral */}
      <aside
        style={{
          width: '300px',
          height: '95vh',
          backgroundColor: '#ffffff',
          position: 'fixed',
          top: '0',
          left: '0',
          padding: '20px',
          boxShadow: '2px 0 6px rgba(0, 0, 0, 0.1)',
        }}
      >
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
          marginLeft: '320px',
          padding: '40px',
          backgroundColor: '#f8f9fa',
          overflowY: 'auto',
          height: '95vh',
        }}
      >
        {/* Encabezado */}
        <div
          style={{
            backgroundColor: '#ffffff',
            color: '#011c43',
            padding: '50px',
            borderRadius: '16px',
            border: '2px solid #011c43',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          <h1>Gestión de Clientes</h1>
        </div>

        {/* Tabla de Clientes */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '20px',
            border: '2px solid #011c43',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            minHeight: '50vh',
          }}
        >
          {clients.length === 0 ? (
            <p style={{ color: '#011c43', textAlign: 'center' }}>No hay clientes registrados.</p>
          ) : (
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                color: '#011c43',
                fontSize: '1rem',
              }}
            >
              <thead>
                <tr>
                  <th style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>Nombre Completo</th>
                  <th style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>Dirección Completa</th>
                  <th style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>Coordenadas</th>
                  <th style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr key={index}>
                    {editingIndex === index ? (
                      <>
                        <td>
                          <input
                            type="text"
                            name="nombres"
                            value={editData.nombres}
                            onChange={handleEditChange}
                            placeholder="Nombre(s)"
                          />
                          <input
                            type="text"
                            name="apellidoPaterno"
                            value={editData.apellidoPaterno}
                            onChange={handleEditChange}
                            placeholder="Apellido Paterno"
                          />
                          <input
                            type="text"
                            name="apellidoMaterno"
                            value={editData.apellidoMaterno}
                            onChange={handleEditChange}
                            placeholder="Apellido Materno"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="calle"
                            value={editData.calle}
                            onChange={handleEditChange}
                            placeholder="Calle"
                          />
                          <input
                            type="text"
                            name="numero"
                            value={editData.numero}
                            onChange={handleEditChange}
                            placeholder="Número"
                          />
                          <input
                            type="text"
                            name="colonia"
                            value={editData.colonia}
                            onChange={handleEditChange}
                            placeholder="Colonia"
                          />
                          <input
                            type="text"
                            name="ciudad"
                            value={editData.ciudad}
                            onChange={handleEditChange}
                            placeholder="Ciudad"
                          />
                          <input
                            type="text"
                            name="codigoPostal"
                            value={editData.codigoPostal}
                            onChange={handleEditChange}
                            placeholder="Código Postal"
                          />
                        </td>
                        <td>--</td>
                        <td>
                          <button onClick={handleSaveEdit}>Guardar</button>
                          <button onClick={handleCancelEdit}>Cancelar</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{`${client.nombres} ${client.apellidoPaterno} ${client.apellidoMaterno}`}</td>
                        <td>{`${client.calle} ${client.numero}, ${client.colonia}, ${client.ciudad}, ${client.codigoPostal}`}</td>
                        <td>
                          {client.coordenadas ? (
                            <a
                              href={`https://www.google.com/maps?q=${client.coordenadas.lat},${client.coordenadas.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#011c43', textDecoration: 'none' }}
                            >
                              Lat: {client.coordenadas.lat}, Lng: {client.coordenadas.lng}
                            </a>
                          ) : (
                            'Sin coordenadas'
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              setEditingIndex(index);
                              setEditData(client);
                            }}
                          >
                            Editar
                          </button>
                          <button onClick={() => handleDeleteClient(index)}>Eliminar</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
