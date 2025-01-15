import React, { useState, useContext } from 'react';
import { ClientsContext } from '../components/ClientsContext'; // Importa el contexto

function Clients() {
  const { addClient } = useContext(ClientsContext); // Accede al método para agregar clientes
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    calle: '',
    numero: '',
    codigoPostal: '',
    colonia: '',
    ciudad: '',
    coordenadas: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { calle, numero, colonia, ciudad, codigoPostal } = formData;
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
        const newClient = { ...formData, coordenadas: location };
        addClient(newClient); // Agrega el cliente al contexto
        alert('Cliente registrado con éxito');
        setFormData({
          nombres: '',
          apellidoPaterno: '',
          apellidoMaterno: '',
          calle: '',
          numero: '',
          codigoPostal: '',
          colonia: '',
          ciudad: '',
          coordenadas: null,
        });
      } else {
        alert('Error al obtener las coordenadas');
      }
    } catch (error) {
      alert('Hubo un error al registrar al cliente');
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h1>Registro de Clientes</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <label>
          Nombre(s):
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />
        </label>
        <label>
          Apellido Paterno:
          <input type="text" name="apellidoPaterno" value={formData.apellidoPaterno} onChange={handleChange} required />
        </label>
        <label>
          Apellido Materno:
          <input type="text" name="apellidoMaterno" value={formData.apellidoMaterno} onChange={handleChange} required />
        </label>
        <label>
          Calle:
          <input type="text" name="calle" value={formData.calle} onChange={handleChange} required />
        </label>
        <label>
          Número:
          <input type="text" name="numero" value={formData.numero} onChange={handleChange} maxLength="5" required />
        </label>
        <label>
          Código Postal:
          <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} maxLength="5" required />
        </label>
        <label>
          Colonia:
          <input type="text" name="colonia" value={formData.colonia} onChange={handleChange} required />
        </label>
        <label>
          Ciudad:
          <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required />
        </label>
        <button type="submit" style={{ marginTop: '20px' }}>
          Registrar Cliente
        </button>
      </form>
    </div>
  );
}

export default Clients;
