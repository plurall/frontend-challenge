import React from 'react';
import logo from '../../assets/images/notFound.jpg'

export default props => {

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={props.profile.images.length > 0 ? props.profile.images[0].url : logo} alt="Admin" className="rounded-circle" width="150" />
                        <div className="mt-3">
                            <h4>{props.profile.display_name}</h4>
                            <p className="text-secondary mb-1">Seguidores: {props.profile.followers.total}</p>
                            <p className="text-muted font-size-sm"></p>
                            <a className="btn btn-primary" href={props.profile.external_urls.spotify}>Acesse seu perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}