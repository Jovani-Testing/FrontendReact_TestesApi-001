import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Codebreakrs</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/departments">Departamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Usuários</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;