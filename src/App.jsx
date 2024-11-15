import { useNavigate } from 'react-router-dom';  // Corrigir o nome do hook aqui
import Home from './home';
import Client from './client';
import { Routes, Route } from 'react-router-dom'; // Corrigir a importação das rotas

function App() {
  return (
    <div>
      <Home />
      <main>
        <Routes>
          <Route path="/clientes" element={<Client />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
