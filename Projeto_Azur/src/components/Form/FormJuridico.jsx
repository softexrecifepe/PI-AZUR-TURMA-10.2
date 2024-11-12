import React, { useState } from 'react';
import axios from 'axios';
import './FormCadastro.css';
import './Input.css';
import logo from '../../assets/cadastro.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Formjuridico = ({ pessoaEscolhida, isFisica }) => {
  const endpointPj = 'http://localhost:3000/pj';

  const [usuario, setUsuario] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    cnpj: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",  // Adicionado ao estado
  });

  function validarCNPJ(cnpj) {
    // Remove caracteres não numéricos (pontos, barras, traços)
    cnpj = cnpj.replace(/[^\d]+/g, '');
  
    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
      return false;
    }

    // Impede que números repetidos como "00000000000000" ou "11111111111111" sejam validados
    if (/^(\d)\1{13}$/.test(cnpj)) {
      return false;
    }
  
    // Validação do primeiro dígito verificador
    let soma = 0;
    let pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
      soma += parseInt(cnpj.charAt(i)) * pesos[i];
    }
    let resto = soma % 11;
    let digito1 = (resto < 2) ? 0 : 11 - resto;
    
    // Validação do segundo dígito verificador
    soma = 0;
    pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
      soma += parseInt(cnpj.charAt(i)) * pesos[i];
    }
    resto = soma % 11;
    let digito2 = (resto < 2) ? 0 : 11 - resto;
  
    // Compara os dígitos verificadores calculados com os fornecidos
    if (parseInt(cnpj.charAt(12)) === digito1 && parseInt(cnpj.charAt(13)) === digito2) {
      return true;
    } else {
      return false;
    }
  }
  
  const validaForm = () => {
    const { email, senha, confirmarSenha, cnpj, telefone } = formData;

    if (!email || !senha || !confirmarSenha || !cnpj || !telefone) {
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

    if (!validarCNPJ(cnpj)) {
      toast.error("CNPJ inválido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validaForm()) return;

    try {   
      const response = await axios.post(endpointPj, formData);  
      setUsuario([...usuario, response.data]); 
      toast.success("Cadastro realizado com sucesso!");
      console.log("Cadastro realizado com sucesso");
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      toast.error("Erro ao realizar o cadastro."); 
    }
  };

   // Função para realizar uma requisição GET e buscar os usuários cadastrados
  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(endpointPf);
      setUsuario(response.data);
      console.log("Usuários cadastrados:", response.data);
      toast.success("Usuários carregados com sucesso!");
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      toast.error("Erro ao carregar os usuários.");
    }
  };

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
              checked={!isFisica}
              onChange={() => pessoaEscolhida(false)}
            />
            Pessoa Jurídica
          </label>
          <label>
            <input
              type="radio"
              checked={isFisica}
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
            
            <label>CNPJ</label>
            <input 
              type="text" 
              name="cnpj" 
              placeholder="Digite seu CNPJ" 
              value={formData.cnpj} 
              onChange={(e) =>
                setFormData({ ...formData, cnpj: e.target.value })
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
              value={formData.confirmarSenha} // Adicionado ao campo
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

export default Formjuridico;
