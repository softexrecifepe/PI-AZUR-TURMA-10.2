import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Home from './pages/home.jsx';
import NotFound from "./components/Notfound/Notfound.jsx";
import ConfigUser from './pages/configuser.jsx';
import ConfigAdm from './pages/configadm.jsx';
import Admcliente from "./pages/admclientes.jsx";
import AdmClientesDoc from './pages/admclientesdoc';  // Importando o AdmClientesDoc

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/cadastro" />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/configuser" element={<ConfigUser />} />
          <Route path="/configadm" element={<ConfigAdm />} />
          <Route path="/admcliente" element={<Admcliente />} />
          <Route path="/admclientesdoc" element={<AdmClientesDoc />} />  {/* Adicionando a nova rota */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
