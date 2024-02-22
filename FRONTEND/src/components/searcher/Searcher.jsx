import React, { useState } from 'react';
import { useDataContext } from '../../context/DataContext';

function Search() {
  const { artists, searchArtists } = useDataContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      await searchArtists(searchTerm);
    } catch (error) {
      console.error('Error en la búsqueda', error);
    }
  };

  return (
    <div>
      <h2>Buscar Artistas</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <input
          type="text"
          placeholder="Buscar artistas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id_artist}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
