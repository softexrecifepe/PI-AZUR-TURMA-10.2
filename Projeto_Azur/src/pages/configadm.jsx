import React from "react";
import "./configadm.css";

const ConfigAdm = () => {
  return (
    <div className="settings-container">
      <div className="top-rectangle"></div> {/* Retângulo no topo */}
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-info">
            <img className="profile-icon" src="https://via.placeholder.com/80" alt="Ícone de Perfil" />
            <div className="profile-text">
              <p className="profile-name">Administrador</p>
              <p className="profile-email">admin@empresa.com</p>
            </div>
          </div>
        </div>
      </div>
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
      <div className="save-button-section">
        <button className="save-button">Salvar</button>
      </div>
    </div>
  );
};

export default ConfigAdm;
