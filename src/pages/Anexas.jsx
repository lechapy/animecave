import { Box, Typography, Link, useTheme } from '@mui/material';

function Anexas() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: 'calc(100vh - 64px)',
        padding: '60px 20px',
        paddingBottom: '60px',
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: 'primary.main',
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '40px',
        }}
      >
        Páginas Anexas
      </Typography>

      <Box
        sx={{
          maxWidth: '800px',
          textAlign: 'left',
          lineHeight: '1.7',
          color: 'text.secondary',
          '& a': {
            color: 'secondary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
      >
        <Typography variant="body1" component="p" sx={{ marginBottom: '20px' }}>
          Aquí puedes encontrar enlaces a otras páginas o recursos relacionados
          con el mundo del anime, desarrollo o proyectos interesantes.
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{ color: 'primary.main', marginBottom: '15px' }}
        >
          Recursos de Anime
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '10px' }}>
          <Link
            href="https://myanimelist.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyAnimeList
          </Link>
          : La base de datos de anime y manga más grande.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '20px' }}>
          <Link
            href="https://anilist.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AniList
          </Link>
          : Una alternativa moderna para rastrear tu progreso de anime/manga.
        </Typography>

        <Typography
          variant="h6"
          component="h2"
          sx={{ color: 'primary.main', marginBottom: '15px' }}
        >
          Desarrollo y Tecnología
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '10px' }}>
          <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React Documentation
          </Link>
          : Aprende más sobre la librería que usamos para esta aplicación.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '10px' }}>
          <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            Material-UI (MUI)
          </Link>
          : La librería de componentes UI que le da estilo a esta web.
        </Typography>
        <Typography variant="body1" component="p">
          <Link href="https://jikan.moe/" target="_blank" rel="noopener noreferrer">
            Jikan API
          </Link>
          : La API de la que obtenemos todos los datos de anime.
        </Typography>
      </Box>
    </Box>
  );
}

export default Anexas;