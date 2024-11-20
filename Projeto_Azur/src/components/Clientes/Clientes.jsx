import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clientes.css'

const TabelaClientes = () => {
    const [clientes, setClientes] = useState([]);
  
    useEffect(() => {
      const fetchClientes = async () => {
        try {
          const response = await axios.get('http://localhost:3000/pf');
          setClientes(response.data);
        } catch (error) {
          console.error('Erro ao buscar os dados:', error);
        }
      };
  
      fetchClientes();
    }, []);
  
    return (
      <div className="tabela-clientes">
        <h1>Jornadas</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nome da Propriedade</th>
              <th>Ver Documentos</th>
              <th>ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.propriedade || 'Propriedade Exemplo'}</td>
                <td><button>Ver Documentos</button></td>
                <td>{cliente.id}</td>
                <td>{cliente.status || 'Pendente'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TabelaClientes;