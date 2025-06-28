function AboutAPI() {
  return (
    <div style={{ padding: '40px', color: 'white', backgroundColor: '#1c1c1c', minHeight: '100vh' }}>
      <h2 style={{ color: '#ff4081' }}>Sobre la API</h2>
      <p>
        Esta aplicación utiliza la <strong>Jikan REST API</strong>, que permite acceder de forma gratuita a información detallada de animes,
        incluyendo títulos, sinopsis, imágenes, puntuaciones, géneros y más.
      </p>
      <p>
        Es una API construida sobre datos de <a href="https://myanimelist.net/" target="_blank" rel="noreferrer" style={{ color: '#4fc3f7' }}>MyAnimeList</a>,
        ideal para proyectos educativos y personales.
      </p>
      <p>Más info en: <a href="https://jikan.moe/" target="_blank" rel="noreferrer" style={{ color: '#4fc3f7' }}>https://jikan.moe/</a></p>
    </div>
  );
}

export default AboutAPI;