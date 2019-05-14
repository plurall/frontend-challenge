import React from 'react';
import RateStar from '../utils/RateStar';
import VerMais from '../utils/verMais';
import { Link } from 'react-router-dom';
import AdicionaVirgula from '../utils/adicionarVirgula';

const Body = (props) => {
    return(
        <React.Fragment>
            {props.items && props.items.map(element => {
                
            return(
                <Link to={`/artistas/${element.id}`} style={{textDecoration: 'none'}}>
                    <div className="table-body">
                        <div className="body-foto">
                            <img className="foto-cantor" src={element.images[0] ? element.images[0].url : 'https://bit.ly/2PYBAXl'} alt={element.name}/>
                        </div>
                        <div><span>{element.name}</span></div>
                        <div><span>{element.genres.map((genero, index, generos) => {
                            return index === 3 ? <VerMais generos={generos}/> : <span>{AdicionaVirgula(genero, index, generos)}</span>
                        })}</span></div>
                        <div className="body-stars">
                            <span><RateStar popularidade={element.popularity} /></span>
                        </div>
                    </div>
                </Link>
            )})}
        </React.Fragment>
    )
}

export default Body;