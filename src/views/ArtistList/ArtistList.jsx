import React from 'react';
import { Link } from 'react-router-dom';


const ArtistList = ({ artist }) => {
  
  return (
    <div className="d-flex flex-wrap container d-flex justify-content-center">
      {artist.map(user => (
        <div className="p-1 text-center col-sm-4">
          <div className="card pt-3">
            <p key={user.name}>{user.name}</p>
            <Link className="btn btn-dark btn-sm" to={`/artista/${user.id}`}>Acessar artista</Link>
          </div>
        </div>
      ))
      }
    </div>
  );

};

export default ArtistList;
