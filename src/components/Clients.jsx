import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientsContext } from '../components/ClientsContext';
import botbiLogo from '../assets/botbi.png';

function Clients() {
  const { addClient } = useContext(ClientsContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    calle: '',
    numero: '',
    codigoPostal: '',
    colonia: '',
    ciudad: '',
    correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validaciones específicas para "numero" y "codigoPostal"
    if (name === 'numero') {
      if (value === '' || /^[0-9]+$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else if (name === 'codigoPostal') {
      if (value === '' || (/^[0-9]+$/.test(value) && value.length <= 5)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
        addClient(newClient);
        alert('Cliente registrado con éxito');
        handleReset();
      } else {
        alert('No se pudieron obtener las coordenadas.');
      }
    } catch (error) {
      alert('Error al registrar el cliente.');
    }
  };

  const handleReset = () => {
    setFormData({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      calle: '',
      numero: '',
      codigoPostal: '',
      colonia: '',
      ciudad: '',
      correo: '',
    });
  };

  return (
    <div style={styles.container}>
      {/* Logotipo */}
      <div style={styles.logoContainer}>
        <img src={botbiLogo} alt="Botbi Logo" style={styles.logo} />
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Registro de Clientes</h1>

        {/* Nombre Completo */}
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="nombres" style={styles.label}>
              Nombre(s)
            </label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="apellidoPaterno" style={styles.label}>
              Apellido Paterno
            </label>
            <input
              type="text"
              id="apellidoPaterno"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="apellidoMaterno" style={styles.label}>
              Apellido Materno
            </label>
            <input
              type="text"
              id="apellidoMaterno"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        </div>

        {/* Dirección */}
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label htmlFor="calle" style={styles.label}>
              Calle
            </label>
            <input
              type="text"
              id="calle"
              name="calle"
              value={formData.calle}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="numero" style={styles.label}>
              Número
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="colonia" style={styles.label}>
              Colonia
            </label>
            <input
              type="text"
              id="colonia"
              name="colonia"
              value={formData.colonia}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="codigoPostal" style={styles.label}>
              Código Postal
            </label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="ciudad" style={styles.label}>
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        </div>

        {/* Correo */}
        <div style={{ ...styles.inputGroup, marginBottom: '30px' }}>
          <label htmlFor="correo" style={styles.label}>
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Botones de acción */}
        <div style={{ ...styles.row, marginBottom: '20px' }}>
          <button type="submit" style={styles.button}>
            Registrar Cliente
          </button>
          <button type="button" style={styles.buttonSecondary} onClick={handleReset}>
            Cancelar
          </button>
        </div>
      </form>

      {/* Botón de regresar */}
      <button
        onClick={() => navigate('/main')}
        style={styles.backButton}
        title="Regresar a página principal"
      >
        ↩
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '20px',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    maxWidth: '200px',
    height: 'auto',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '700px',
  },
  title: {
    fontSize: '1.8rem',
    color: '#011c43',
    marginBottom: '20px',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
  },
  inputGroup: {
    flex: 1,
  },
  label: {
    display: 'block',
    fontSize: '1rem',
    color: '#011c43',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '2px solid #011c43',
    borderRadius: '8px',
    outline: 'none',
  },
  button: {
    flex: 1,
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#011c43',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  buttonSecondary: {
    flex: 1,
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#011c43',
    border: '2px solid #011c43',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    marginTop: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: '2px solid #011c43',
    color: '#011c43',
    fontSize: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Clients;

