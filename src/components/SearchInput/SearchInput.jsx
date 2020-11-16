import React from 'react';

export default props => {

    return (
        <div className="row mx-auto">
            <div className="mx-auto col-md-6">
                <div className="md-form mt-0">
                    <input className="form-control" type="text" placeholder="Digite o nome do artista.." value={props.value} onChange={props.onChangeEvent} aria-label="Search"/>
                </div>
            </div>
        </div>
    )

}