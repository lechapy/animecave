import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AnimeList() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchAnime = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=12`);
      const data = await res.json();
      setResults(data.data);
    } catch (error) {
      console.error('Error al buscar animes:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#1c1c1c', color: '#f0f0f0', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#ff4081' }}>Buscar Anime</h1>

      <form onSubmit={searchAnime} style={{ margin: '30px 0' }}>
        <input
          type="text"
          placeholder="Escribe un anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '250px',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff4081',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Buscar
        </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {results.map(anime => (
          <div
            key={anime.mal_id}
            style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '8px', width: '200px', cursor: 'pointer' }}
            onClick={() => navigate(`/anime/${anime.mal_id}`)}
          >
            <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimeList;