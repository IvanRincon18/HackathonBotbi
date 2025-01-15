import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap para estilos rápidos
import './index.css';

// Importar el proveedor del contexto
import { ClientsProvider } from './components/ClientsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolver la aplicación con el proveedor del contexto */}
    <ClientsProvider>
      <App />
    </ClientsProvider>
  </React.StrictMode>
);
