import React, { useState } from 'react';
import './Search.scss';
import IArtist from '../../types/Spotify/Artist';
import Searchbar from '../../components/Search/Searchbar/Searchbar';
import SearchResults from '../../components/Search/SearchResults/SearchResults';


const Search: React.FC = () => {
  const [artists, setArtists] = useState<IArtist[]>([]);
  

  return (
    <div className="search">
      <Searchbar setArtists={setArtists} />
      <SearchResults artists={artists} />
    </div>
  );
};

export default Search;