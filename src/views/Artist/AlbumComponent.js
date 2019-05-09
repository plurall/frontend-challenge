import React from 'react';
import AlbumCell from './AlbumCell'

var AlbumComponent = (props) => {
    var drawAlbums = () => props.list ? props.list.map(item => <AlbumCell album={item}/>) : null

    return (
        <div className='AlbumComponent'>
            {drawAlbums()}
        </div>
    );
}

export default AlbumComponent;