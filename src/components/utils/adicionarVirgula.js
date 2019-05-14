import React from 'react';

const adicionaVirgula = (palavra, index, generos) => (index+1) < generos.length ? palavra + ', \r\r' : palavra

export default adicionaVirgula;