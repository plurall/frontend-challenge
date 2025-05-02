import React, { useState } from 'react';
import './Search.scss';
import Searchbar from '@/components/Search/Searchbar/Searchbar';
import SearchResults from '@/components/Search/SearchResults/SearchResults';
import IArtistResponse from '@/types/Spotify/Artist';


const Search: React.FC = () => {
  const [artistsResponse, setArtistsResponse] = useState<IArtistResponse | null>(null);
  

  return (
    <div className="search">
      <Searchbar setArtistsResponse={setArtistsResponse} />
      <SearchResults artistsResponse={artistsResponse} setArtistsResponse={setArtistsResponse} />
    </div>
  );
};

export default Search;