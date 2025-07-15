import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// --- Importaciones de Material-UI ---
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  useTheme, // Para acceder al tema
} from '@mui/material';

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme(); // Acceder al tema

  useEffect(() => {
    setAnime(null);
    setError(null);

    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.data) {
          setAnime(data.data);
        } else {
          throw new Error('No se encontraron detalles para este anime.');
        }
      })
      .catch((err) => {
        console.error('Error al cargar el anime:', err);
        setError('No se pudo cargar la información del anime.');
      });
  }, [id]);

  // Manejo de estado de carga y error con componentes MUI
  if (error) {
    return (
      <Box
        sx={{
          backgroundColor: 'background.default',
          color: 'error.main', // Color de error del tema
          minHeight: 'auto', // Ajustado a auto
          padding: '40px', // Padding general
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem', // Usar 'rem'
          fontFamily: theme.typography.fontFamily,
          height: 'calc(100vh - 64px)', // Ocupa el resto de la pantalla, resta la altura de la AppBar
        }}
      >
        <Typography variant="h5" component="p" sx={{ color: 'error.main' }}>
          {error}
        </Typography>
      </Box>
    );
  }

  if (!anime) {
    return (
      <Box
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          minHeight: 'auto', // Ajustado a auto
          padding: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem', // Usar 'rem'
          fontFamily: theme.typography.fontFamily,
          height: 'calc(100vh - 64px)', // Ocupa el resto de la pantalla, resta la altura de la AppBar
        }}
      >
        <CircularProgress sx={{ color: 'primary.main', mr: 2 }} />
        <Typography variant="h5" component="p">
          Cargando detalles del anime...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: 'auto', // Asegura que la altura se ajuste al contenido
        padding: '60px 20px',
        paddingBottom: '60px',
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h1" // Utiliza la variante h1 del tema (o define una específica)
        component="h1"
        sx={{
          color: 'primary.main',
          fontSize: '3.8rem', // Usar 'rem'
          fontWeight: 'bold',
          marginBottom: '30px',
          maxWidth: '90%',
          wordBreak: 'break-word',
        }}
      >
        {anime.title}
      </Typography>

      <Box
        component="img"
        src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
        alt={anime.title}
        sx={{
          maxWidth: '350px',
          width: '100%',
          borderRadius: '12px',
          margin: '30px 0',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
          border: `3px solid ${theme.palette.primary.main}`, // Usa el color primario del tema
          objectFit: 'cover',
          height: 'auto', // Mantenemos auto si quieres proporción natural
        }}
      />

      <Typography
        variant="body1" // Variantes de tipografía para párrafos
        component="p"
        sx={{
          maxWidth: '900px',
          margin: '20px auto 40px auto',
          fontSize: '1.1rem', // Usar 'rem'
          lineHeight: '1.7',
          color: 'text.secondary', // Color secundario del texto
          textAlign: 'left',
        }}
      >
        <strong>Sinopsis:</strong> {anime.synopsis || 'Sinopsis no disponible.'}
      </Typography>

      {/* Contenedor para detalles usando Grid */}
      <Grid
        container
        spacing={2} // Espacio entre los items del grid (16px por defecto si spacing=2)
        sx={{
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto 40px auto', // Centrar y más espacio inferior
          textAlign: 'left',
          padding: '0 20px',
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <Typography component="strong" sx={{ color: 'primary.main' }}>
              Tipo:
            </Typography>{' '}
            {anime.type}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <Typography component="strong" sx={{ color: 'primary.main' }}>
              Estado:
            </Typography>{' '}
            {anime.status || 'N/A'}
          </Typography>
        </Grid>
        {anime.episodes && (
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <Typography component="strong" sx={{ color: 'primary.main' }}>
                Episodios:
              </Typography>{' '}
              {anime.episodes}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <Typography component="strong" sx={{ color: 'primary.main' }}>
              Duración:
            </Typography>{' '}
            {anime.duration}
          </Typography>
        </Grid>
        {anime.score && (
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              <Typography component="strong" sx={{ color: 'primary.main' }}>
                Puntaje:
              </Typography>{' '}
              {anime.score} (
              {anime.scored_by ? `${anime.scored_by} usuarios` : 'N/A'})
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <Typography component="strong" sx={{ color: 'primary.main' }}>
              Emitido:
            </Typography>{' '}
            {anime.aired?.string || 'N/A'}
          </Typography>
        </Grid>
        {anime.genres && anime.genres.length > 0 && (
          <Grid item xs={12}>
            {' '}
            {/* Ocupa todo el ancho */}
            <Typography variant="body1">
              <Typography component="strong" sx={{ color: 'primary.main' }}>
                Géneros:
              </Typography>{' '}
              {anime.genres.map((g) => g.name).join(', ')}
            </Typography>
          </Grid>
        )}
        {anime.studios && anime.studios.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="body1">
              <Typography component="strong" sx={{ color: 'primary.main' }}>
                Estudio(s):
              </Typography>{' '}
              {anime.studios.map((s) => s.name).join(', ')}
            </Typography>
          </Grid>
        )}
        {anime.demographics && anime.demographics.length > 0 && (
          <Grid item xs={12}>
            <Typography variant="body1">
              <Typography component="strong" sx={{ color: 'primary.main' }}>
                Demografía:
              </Typography>{' '}
              {anime.demographics.map((d) => d.name).join(', ')}
            </Typography>
          </Grid>
        )}
      </Grid>

      {anime.trailer?.embed_url && (
        <Box
          sx={{
            margin: '40px auto',
            maxWidth: '900px',
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2" // Usar variante h2 del tema
            component="h2"
            sx={{
              color: 'primary.main',
              fontSize: '2.5rem', // Usar 'rem'
              marginBottom: '20px',
            }}
          >
            Tráiler
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              height: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
              border: `3px solid ${theme.palette.primary.main}`, // Usa el color primario del tema
            }}
          >
            <Box
              component="iframe" // Usar Box como iframe
              src={anime.trailer.embed_url}
              title={`${anime.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default AnimeDetail;