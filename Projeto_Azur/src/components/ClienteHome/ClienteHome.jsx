import React from 'react';
import perfil from '../../assets/cadastro.png';
import "./ClienteHome.css"

const ClienteHome = () => {
  return (
        <div className='home-content'>
          <h1>
            Olá, Bruno!
          </h1>
          <p>
            Aqui está um resumo da sua jornada de aquisição
          </p>
          <div className='user-info'>
            <div>
              <button>
                <h3>Imóvel Mauê</h3>
              </button>
              <h4>
                Você está na Etapa 1 - Documentação
              </h4>
              <p>
                1 de 7 passos completos
              </p>
            </div>
            <div className='home-img'>
              <img src={perfil} alt="Profile Image"/>
            </div>
          </div>
        </div>
  );
}

export default ClienteHome;
