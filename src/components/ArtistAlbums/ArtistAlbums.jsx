import React from 'react';
import logo from '../../assets/images/notFound.jpg'

export default props => {
    return (
        <React.Fragment>
            <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Albums</h5><p className="btn btn-link text-muted">Show all</p>
                </div>
                <div className="row">
                    {props.albums.items.map(album => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2 pr-lg-1 text-center">
                                <img src={album.images ? album.images[0].url : logo} alt="" className="img-fluid rounded shadow-sm" />
                                <h5>{album.name}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}