import React from 'react';
import Header from './header';
import Body from './body';

const Table = (props) => {
    return(
        <div className="row">
            <div className="col-9">
                <div className="table">
                    <Header />
                    <Body {...props.artistas}/>
                </div>
            </div>
        </div>
    )
}

export default Table;