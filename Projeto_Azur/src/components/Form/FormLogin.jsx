import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FormLogin.css';
import logo from '../../assets/login.png'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



function FormLogin() {
  const endpointPj = 'http://localhost:3000/pj';
  const endpointPf = 'http://localhost:3000/pf';

  const [usuario, setUsuario] = useState([]);
  const [verificar, setVerificar] = useState({
    email: "",
    senha: "",
  });

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(endpointPf);
        setUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const validaForm = () => {
    const { email, senha} = verificar;

    if (!email || !senha) {
      toast.error("Todos os campos são obrigatórios!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, insira um email válido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validaForm()) return;
    const usuarioExistente = usuario.find(
      (usuario) => usuario.email === verificar.email
    );
    if (!usuarioExistente) {
      toast.error("Não existe um usuário cadastrado com este email.");
      return;
    } else {
      if (usuarioExistente.senha == verificar.senha){
        
      } else {
        toast.error("Senha incorreta.");
      return;
      }
    }
    
  };

  return (
    <div className="form-wrapper">
      <ToastContainer /> 
      <div className="form-container">
        <div className="form-header">
          <h1>Login</h1>
          <p className='msgHeader'>Bem-vindo de volta! Por favor, faça seu login!</p>
        </div>

        <form className="form-fields">
          <div className='input-group'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Digite seu email' 
              value={verificar.email} 
              onChange={(e) =>
                setVerificar({ ...verificar, email: e.target.value })
              } 
            />

          <label>Senha</label>
            <input 
              type="password" 
              name="senha" 
              placeholder="Digite sua senha" 
              value={verificar.senha} 
              onChange={(e) =>
                setVerificar({ ...verificar, senha: e.target.value })
              } 
            />
          </div>

          <div className="form-toggle">
            <label>
              <input type="radio"/>
              Lembre de mim
            </label>
          </div>

          <button type="button" className="form-button" onClick={handleSubmit}>
            Login
          </button>
        </form>

        <div className="form-footer">
          <p>Não tem uma conta? Faça seu <a href="/cadastro">Cadastro</a></p>
        </div>
      </div>
      <div className="form-image">
        <img src={logo}/>
      </div>
    </div>
  );
}

export default FormLogin;