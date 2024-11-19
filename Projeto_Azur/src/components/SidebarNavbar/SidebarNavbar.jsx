import React from 'react';
import perfil from '../../assets/cadastro.png';
import "./SidebarNavbar.css"
import { CiHome } from "react-icons/ci";
import { RiBuilding2Line } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';

const SidebarNavbar = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <div className="profile">
          <img src={perfil} alt="Profile Image" />
          <p>Bem-vindo</p>
          <h2>Bruno Pires</h2>
        </div>
        <ul>
          <li>
            <Link to="/home" className="active">
              <CiHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/jornada">
              <RiBuilding2Line /> Jornada
            </Link>
          </li>
          <li>
            <Link to="/configuracoes">
              <FaGear /> Configurações
            </Link>
          </li>
          <li>
            <Link to="/modo-escuro">
              <CgDarkMode /> Modo Escuro
            </Link>
          </li>
        </ul>

        <hr className="divider" />

        <Link to="/login" className="logout">
          <TbLogout /> Sair
        </Link>
      </nav>
      <div className="main-content">
        <header>
          <h1 className="color-main_content">Home</h1>
        </header>
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
      </div>
    </div>
  );
}

export default SidebarNavbar;
