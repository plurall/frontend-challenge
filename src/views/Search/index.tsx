import React, { FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import SubHeader from '../../components/SubHeader';

import { SomosClient } from '../../utils';

import styles from './Search.module.css'

const Search: React.FC = () => {

  const client = new SomosClient();

  function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
  }

  return (
    <>
      <SubHeader
        buttonHref="/"
        breadcrumb={[{ text: 'Home  >  Busca' }]}
        heading="Somos Front-end Challange"
      />
      <div className={styles.container}>
        <h1>Buscar Artista</h1>

        <form onSubmit={handleAddRepository}>
          <input
            // value={newRepo}
            // onChange={e => setNewRepo(e.target.value)}
            placeholder="Digite o nome do artista"
          />
          <button type="submit">Pesquisar</button>
        </form>

        {/* {inputError && <Error>{inputError}</Error>} */}

        <div className={styles.artists}>
          <Link
            to="/artista"
          >
            {/* <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            /> */}
            <div>
              <strong>Artista 1</strong>
              <p>Artista Muito Bom</p>
            </div>
            <FiChevronRight size={20} />
          </Link>

            <Link
              to="/artista"
            >
              {/* <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              /> */}
              <div>
                <strong>Artista 2</strong>
                <p>Artista Mais ou Menos</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          {/* {repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`/repository/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))} */}
        </div>
      </div>

    </>
  )
}

export default Search;
