import React from 'react';
import { Link } from 'react-router-dom';
import './LoggedIn.scss';

const LoggedIn: React.FC = () => {
  return (
    <div className="logged-in">
      <h1 className="logged-in-title">Buscar Artista</h1>
      <Link to="/search" className="logged-in-button">
        Ir para Busca
      </Link>
    </div>
  );
};

export default LoggedIn;