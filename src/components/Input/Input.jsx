import Context from 'context/Context';
import React, { useContext } from 'react'
import styles from './Input.module.css'


const Input = () => {
  const { search } = useContext(Context)
  return (
    <React.Fragment>
      <div>
        <form>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="search"
              placeholder="Digite o nome de um artista"
              onChange={(event) => search(event)}
            />     
          </label>
        </form>
      </div>
    </React.Fragment>
  );

}

export default Input;
