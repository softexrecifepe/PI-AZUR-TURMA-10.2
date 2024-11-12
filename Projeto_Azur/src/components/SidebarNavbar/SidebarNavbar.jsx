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
          <h3>Bem-vindo</h3>
          <h2>Bruno Pires</h2>
        </div>
        <ul>
          <li>
            <Link to="/" className="active">
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

        <Link to="/sair" className="logout">
          <TbLogout /> Sair
        </Link>
      </nav>
      <div className="main-content">
        <header>
          <h1 className="color-main_content">Home</h1>
        </header>
      </div>
    </div>
  );
}

export default SidebarNavbar;
