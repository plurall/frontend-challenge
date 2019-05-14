import React, { useState } from 'react';
import adicionaVirgula from '../utils/adicionarVirgula';
const VerMais = (props) => {
  const [verMaisAtivo, setVerMais] = useState(false);

  const handleVerMais = (event) => {
      event.preventDefault()
    setVerMais(!verMaisAtivo)
  }

  const VerMais = () =>  <span className="ver-mais" onClick={handleVerMais}>Ver mais</span>

  return (
    <React.Fragment>
        {verMaisAtivo ? '' : <VerMais />}
        {props.generos.map((genres, index, generos) =>
          <span className={!verMaisAtivo ? 'genero-hide' : ''}>
            {adicionaVirgula(genres, index, generos)}
          </span>)}
          {!verMaisAtivo ? '' : <span className="ver-mais" onClick={handleVerMais}>Ver menos</span>}
    </React.Fragment>
  );
}

export default VerMais;