import React from 'react';
import {
    Link
  } from "react-router-dom";

export default props => {
    console.log('resultado')
    console.log(props.searchResults);
    return (
        <div className="row mt-4 mb-4">
            {props.searchResults.map(result => {
                return (
                    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6'>
                        <div className="" key={result.id}>
                            <div className="col-md-8 mx-auto text-center">
                                <img src={result.image} className=" img-fluid img-thumbnail rounded-circle" width="100" alt="..." />
                            </div>
                            <div className="">
                                <Link to={`/Artista/${result.id}`}>
                                    <h5 className="card-title text-center">
                                        {result.name}
                                    </h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}