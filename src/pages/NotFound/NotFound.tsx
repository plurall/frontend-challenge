import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found">
      <h1 className="not-found-title">Página Não Encontrada</h1>
      <button className="not-found-button" onClick={handleGoHome}>
        Voltar para Home
      </button>
    </div>
  );
};

export default NotFound;