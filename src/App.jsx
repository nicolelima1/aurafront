import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Client from './Components/client';
import Profissional from './Components/profissional';
import Services from './Components/services';
import Login from './Components/login';
import Perfil from './Components/perfil';
import Agendamento from './Components/agendamento';
import Servicos from './Components/servicos';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Client />} />
        <Route path="/profissional" element={<Profissional/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/agendamento" element={<Agendamento/>}/>
        <Route path="/servicos" element={<Servicos/>}/>
        
      </Routes>
    </div>
  
  );
}

export default App;
