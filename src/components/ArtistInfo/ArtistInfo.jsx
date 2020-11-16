
import React from 'react';
import logo from '../../assets/images/notFound.jpg'

export default props => {

    return (
        <React.Fragment>
            <div className="col-md-12 mx-auto">
                <div className="bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img src={props.artist.images.length > 0 ? props.artist.images[0].url : logo} alt="..." width="300" className="rounded mb-2 img-thumbnail" />
                            </div>
                            <div className="mb-5 text-black">
                                <h1 className="mt-0 mb-0">{props.artist.name}</h1>
                                <h5><a href={props.artist.external_urls.spotify}>Escute aqui</a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-2">
                            Seguidores
                                <h5 className="font-weight-bold mb-0  d-block">{props.artist.followers.total}</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i></small>
                            </li>
                            <li className="list-inline-item ml-2">
                            Popularidade
                                <h5 className="font-weight-bold mb-0 d-block">{props.artist.popularity}</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i></small>
                            </li>                           
                        </ul>
                    </div>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}