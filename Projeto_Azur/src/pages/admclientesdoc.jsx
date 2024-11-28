import React, { useState } from 'react';
import './admclientesdoc.css';
import DocumentIcon from '../assets/document.png';

const AdmClientesDoc = () => {
  // Estado inicial dos documentos
  const [documents, setDocuments] = useState([
    { id: 1, name: 'RG.jpg', date: '13/09/2024 17:22h', status: 'Finalizado' },
    { id: 2, name: 'CPF.jpg', date: '17/09/2024 08:55h', status: 'Pendente' },
    { id: 3, name: 'Certidaoestadocivil.jpg', date: '17/10/2024 14:03h', status: 'Finalizado' },
    { id: 4, name: 'Comprovante residência.jpg', date: '25/10/2024 15:33h', status: 'Finalizado' },
    { id: 5, name: 'ContraCheque.jpg', date: '25/10/2024 15:35h', status: 'Finalizado' },
    { id: 6, name: 'PIS.jpg', date: '01/10/2024 19:42h', status: 'Pendente' }
  ]);

  // Função para atualizar o status
  const updateStatus = (id, newStatus) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === id ? { ...doc, status: newStatus } : doc
      )
    );
  };

  // Verifica se todos os documentos estão finalizados
  const allDocumentsFinalized = documents.every((doc) => doc.status === 'Finalizado');

  return (
    <div className="page-container">
      <header className="header">
        <h1 className="header-title">Clientes</h1>
      </header>

      <div className="container">
        <div className="documents">
          <h3>Documentos de Allena</h3>
          <select className="dropdown">
            <option>Imóvel Mauê</option>
            <option>Reserva das Palmeiras</option>
          </select>

          {/* Tabela de documentos */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Arquivo</th>
                  <th>Data de envio</th>
                  <th>Analisar Documentos</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id}>
                    <td>
                      <img src={DocumentIcon} alt="Ícone de Documento" className="doc-icon" />
                      {doc.name}
                    </td>
                    <td>{doc.date}</td>
                    <td>
                      <button
                        className="btn-accept"
                        onClick={() => updateStatus(doc.id, 'Finalizado')}
                      >
                        Aceitar
                      </button>
                      <button
                        className="btn-reject"
                        onClick={() => updateStatus(doc.id, 'Pendente')}
                      >
                        Rejeitar
                      </button>
                    </td>
                    <td
                      className={
                        doc.status === 'Finalizado' ? 'status-finalized' : 'status-pending'
                      }
                    >
                      {doc.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Exibe a mensagem abaixo da tabela se todos os documentos foram finalizados */}
          {allDocumentsFinalized && (
            <div className="approval-message">
              <h3>Todos os documentos foram aprovados!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmClientesDoc;
