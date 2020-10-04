import React from 'react';

function PlayLists({top, bottom}){
    return (
        <div className='playlists'>
            <h1 className='play-title'>playlists</h1>
              {top}
              {bottom}
              <hr className="list-separator"/>
        </div>
    );
}

export default PlayLists;

