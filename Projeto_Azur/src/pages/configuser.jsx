import React, { useState } from 'react';
import "./configuser.css";
import SidebarNavbar from "../components/SidebarNavbar/SidebarNavbar"; // Importação do componente

const ConfigUser = () => {
  // Estado para armazenar o ícone selecionado
  const [selectedIcon, setSelectedIcon] = useState("https://via.placeholder.com/80");

  // Função para alterar o ícone de perfil principal
  const handleIconChange = (newIcon) => {
    setSelectedIcon(newIcon);
  };

  return (
    <div className="config-container">
      {/* SidebarNavbar */}
      <SidebarNavbar />

      {/* Área principal */}
      <div className="settings-container">
        {/* Retângulo azul no topo */}
        <div className="top-rectangle"></div>

        {/* Container do cabeçalho */}
        <div className="profile-header">
          <img
            className="profile-icon"
            src={selectedIcon}
            alt="Ícone de Perfil"
          />
          <div className="profile-options">
            <label>
              <input
                type="radio"
                name="profile-pic"
                value="pic1"
                onClick={() => handleIconChange("https://via.placeholder.com/50")}
              />
              <img src="https://via.placeholder.com/50" alt="Opção 1" />
            </label>
            <label>
              <input
                type="radio"
                name="profile-pic"
                value="pic2"
                onClick={() => handleIconChange("https://via.placeholder.com/50?text=2")}
              />
              <img src="https://via.placeholder.com/50?text=2" alt="Opção 2" />
            </label>
            <label>
              <input
                type="radio"
                name="profile-pic"
                value="pic3"
                onClick={() => handleIconChange("https://via.placeholder.com/50?text=3")}
              />
              <img src="https://via.placeholder.com/50?text=3" alt="Opção 3" />
            </label>
          </div>
        </div>

        {/* Campos de entrada */}
        <div className="inputs-section">
          <div className="inputs-left">
            <label htmlFor="full-name">Nome Completo</label>
            <input type="text" id="full-name" name="full-name" />

            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="inputs-right">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="phone">Telefone</label>
            <input type="text" id="phone" name="phone" />

            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input type="password" id="confirm-password" name="confirm-password" />
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="save-button-section">
          <button className="save-button">Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfigUser;
