import React from 'react';
import logo from '../../assets/images/notFound.jpg'

export default props => {

    return (
        <div className="col-md-8 mt-4">
            <div className="card mb-3">
            <h4 className="text-center">Top 6 Ultimos Lançamentos no Brasil</h4>
                <div className="card-body row">
                    
                    {props.releases.albums.items.map(result => {
                        return (
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-2 pr-lg-1 text-center">
                                <img src={result.images ? result.images[0].url : logo} alt="" className="img-fluid rounded shadow-sm" />
                                <h5>{result.name}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}