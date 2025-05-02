import React from 'react';
import { Link } from 'react-router-dom';
import './LoggedIn.scss';

const LoggedIn: React.FC = () => {
  return (
    <div className="logged-in">
      <h1 
        className="logged-in-title"
        data-testid="logged-in-title"
        data-cy="logged-in-title"
      >
          Buscar Artista
      </h1>
      <Link 
        to="/busca" 
        className="logged-in-button"
        data-testid="logged-in-button"
        data-cy="logged-in-button"
        aria-label="Ir para Busca"
      >
        Ir para Busca
      </Link>
    </div>
  );
};

export default LoggedIn;