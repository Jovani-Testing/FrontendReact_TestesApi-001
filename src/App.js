import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UsersPage from './pages/UsersPage';  // Corrigido o caminho do UsersPage
import DepartmentsPage from './pages/DepartmentsPage';  // Importar a página de departamentos
import Header from './pages/Header';  // Importar o Header para navegação


function App() {
  return (
    <div className="App">
      <Router>
        <Header />  {/* Exibe o menu de navegação */}
        <div className="container">
          <Routes>
            {/* Define as rotas para as páginas */}
            <Route path="/users" element={<UsersPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/" element={<UsersPage />} /> {/* Rota padrão */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

