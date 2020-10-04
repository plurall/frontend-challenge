import React from 'react';
import Icon from '../Icons'

function OtherPlaylist({children}) {
    return (
        <div className='featured-item'>
                <button className="create-button no-outline">
                  <div className="playlist-icon">
                    <Icon name='Like' />
                  </div>
                 <span>Músicas Curtidas</span>
                </button>
              {children}
        </div>
    );
}

export default OtherPlaylist;
