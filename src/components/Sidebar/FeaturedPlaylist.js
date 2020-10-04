import React from 'react';
import Icon from '../Icons'

function FeaturedPlaylist({children}) {
    return (
        <>
            <div className="featured-playlists">
                <button className="create-button no-outline">
                  <div className="playlist-icon">
                    <Icon name='Create' />
                  </div>
                  Criar playlist
                </button>
                {children}
            </div>
        </>
    );
}

export default FeaturedPlaylist;
