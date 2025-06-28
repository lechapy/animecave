function Home() {
  return (
    <div style={{
      backgroundColor: 'transparent',
      color: '#f0f0f0',
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <img
        src="/logo.png"
        alt="Logo Anime Cave"
        style={{
          maxWidth: '180px',
          marginBottom: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
        }}
      />
      <h1 style={{ color: '#ff4081' }}>Bienvenido a Anime Cave</h1>
      <p>Explora y descubre tus animes favoritos desde la comodidad de tu navegador.</p>
    </div>
  );
}

export default Home;