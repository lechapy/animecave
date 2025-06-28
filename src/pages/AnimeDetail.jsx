import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.json())
      .then(data => setAnime(data.data))
      .catch(err => console.error('Error al cargar el anime:', err));
  }, [id]);

  if (!anime) {
    return <p style={{ textAlign: 'center' }}>Cargando detalles...</p>;
  }

  return (
    <div style={{
      backgroundColor: '#1c1c1c',
      color: '#f0f0f0',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#ff4081' }}>{anime.title}</h1>
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        style={{ maxWidth: '300px', borderRadius: '8px', margin: '20px 0' }}
      />
      <p style={{ maxWidth: '800px', margin: 'auto' }}>{anime.synopsis}</p>
      <p><strong>Tipo:</strong> {anime.type}</p>
      <p><strong>Episodios:</strong> {anime.episodes}</p>
      <p><strong>Duración:</strong> {anime.duration}</p>
      <p><strong>Puntaje:</strong> {anime.score}</p>
      <p><strong>Emitido:</strong> {anime.aired.string}</p>
    </div>
  );
}

export default AnimeDetail;