import { useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';

function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: theme.typography.fontFamily,
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <img
        src="/logo.png"
        alt="Logo Anime Cave"
        style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: `6px solid ${theme.palette.primary.main}`,
          objectFit: 'cover',
          marginBottom: '40px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
        }}
      />
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: 'primary.main',
          fontSize: '5.5em',
          fontWeight: 'bold',
          marginBottom: '15px',
          letterSpacing: '3px',
          textShadow: `0 0 15px ${theme.palette.primary.main}4D`,
        }}
      >
        Anime Cave
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: '1.5em',
          maxWidth: '700px',
          lineHeight: '1.7',
          color: 'text.secondary',
        }}
      >
        Explora y encuentra tu próximo anime favorito desde la comodidad de tu
        navegador.
      </Typography>
    </Box>
  );
}

export default Home;