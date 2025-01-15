import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const ClientsContext = createContext();

// Proveedor del contexto
export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState(() => {
    // Inicializar con datos de localStorage
    const storedClients = localStorage.getItem('clients');
    return storedClients ? JSON.parse(storedClients) : [];
  });

  // Actualizar localStorage cuando cambian los clientes
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  // Funciones del contexto
  const addClient = (client) => {
    setClients([...clients, client]);
  };

  const updateClient = (index, updatedClient) => {
    const newClients = [...clients];
    newClients[index] = updatedClient;
    setClients(newClients);
  };

  const deleteClient = (index) => {
    const newClients = clients.filter((_, i) => i !== index);
    setClients(newClients);
  };

  return (
    <ClientsContext.Provider value={{ clients, addClient, updateClient, deleteClient }}>
      {children}
    </ClientsContext.Provider>
  );
};
