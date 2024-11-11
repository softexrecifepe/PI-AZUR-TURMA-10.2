import React, { useState } from 'react';
import axios from 'axios';
import './FormCadastro.css';
import './Input.css';
import logo from '../../assets/cadastro.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const FormFisico = ({ pessoaEscolhida, isFisica }) => {
  const endpointPf = 'http://localhost:3000/pf/';
  
  const [usuario, setUsuario] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    confirmarSenha: "",
    cpf: "",
    telefone: ""
  });

  const validaCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    const calcDigito = (factor) =>
      cpf
        .slice(0, factor - 1)
        .split('')
        .reduce((sum, num, i) => sum + num * (factor - i), 0) * 10 % 11 % 10;

    return calcDigito(10) === +cpf[9] && calcDigito(11) === +cpf[10];
  };

  const validaForm = () => {
    const { email, senha, confirmarSenha, cpf, telefone } = formData;

    if (!email || !senha || !confirmarSenha || !cpf || !telefone) {
      toast.error("Todos os campos são obrigatórios!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Por favor, insira um email válido.");
      return false;
    }

    if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return false;
    }

    const senhaRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!senhaRegex.test(senha)) {
      toast.error("A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.");
      return false;
    }

    if (!validaCPF(cpf)) {
      toast.error("CPF inválido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validaForm()) return;

    try {   
      const response = await axios.post(endpointPf, formData);  
      setUsuario([...usuario, response.data]); 
      toast.success("Cadastro realizado com sucesso!");
      console.log("Cadastro realizado com sucesso");
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      toast.error("Erro ao realizar o cadastro."); 
    }
  };

  // Função para realizar uma requisição GET e buscar os usuários cadastrados
  // const fetchUsuarios = async () => {
  //   try {
  //     const response = await axios.get(endpointPf);
  //     setUsuario(response.data);
  //     console.log("Usuários cadastrados:", response.data);
  //     toast.success("Usuários carregados com sucesso!");
  //   } catch (error) {
  //     console.error('Erro ao buscar os dados:', error);
  //     toast.error("Erro ao carregar os usuários.");
  //   }
  // };

  return (
    <div className="form-wrapper">
      <ToastContainer /> 
      <div className="form-image">
        <img src={logo} alt="Cadastro" />
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1>Cadastro</h1>
          <p className='msgHeader'>Vamos preparar sua conta para você começar a usar!</p>
        </div>

        <div className="form-toggle">
          <label>
            <input
              type="radio"
              checked={isFisica}
              onChange={() => pessoaEscolhida(false)}
            />
            Pessoa Jurídica
          </label>
          <label>
            <input
              type="radio"
              checked={!isFisica}
              onChange={() => pessoaEscolhida(true)}
            />
            Pessoa Física
          </label>
        </div>

        <div className="form-fields">
          <div className='input-group'>
            <label>Email</label>
            <input 
              type='email' 
              placeholder='Digite seu email' 
              value={formData.email} 
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              } 
            />
            
            <label>CPF</label>
            <input 
              type="text" 
              name="cpf" 
              placeholder="Digite seu CPF" 
              value={formData.cpf} 
              onChange={(e) =>
                setFormData({ ...formData, cpf: e.target.value })
              }
            />

            <label>Telefone</label>
            <input 
              type="tel" 
              name="telefone" 
              placeholder="Digite seu telefone" 
              value={formData.telefone} 
              onChange={(e) =>
                setFormData({ ...formData, telefone: e.target.value })
              } 
            />
            
            <label>Senha</label>
            <input 
              type="password" 
              name="senha" 
              placeholder="Digite sua senha" 
              value={formData.senha} 
              onChange={(e) =>
                setFormData({ ...formData, senha: e.target.value })
              } 
            />
            
            <label>Confirmar Senha</label>
            <input 
              type="password" 
              name="confirmarSenha" 
              placeholder="Confirme sua senha" 
              value={formData.confirmarSenha}
              onChange={(e) =>
                setFormData({ ...formData, confirmarSenha: e.target.value })
              }
            />
          </div>

          <button type="button" className="form-button" onClick={handleSubmit}>
            Cadastrar
          </button>
        </div>

        <div className="form-footer">
          <p>Já tem uma conta? Faça seu <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default FormFisico;
