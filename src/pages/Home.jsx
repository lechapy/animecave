import { useNavigate } from 'react-router-dom';

// --- Importaciones de Material-UI ---
import { Box, Typography, useTheme } from '@mui/material';

function Home() {
  const theme = useTheme(); // Acceder al tema para colores personalizados si es necesario

  return (
    <Box
      sx={{
        backgroundColor: 'background.default', // Usa el color de fondo definido en el tema
        color: 'text.primary', // Usa el color de texto principal definido en el tema
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: theme.typography.fontFamily, // Usa la fuente definida en el tema
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* La imagen es un elemento HTML estándar ya que MUI no tiene un componente de imagen directo
          para fines generales como esta. Se estiliza con 'sx'. */}
      <img
        src="/logo.png"
        alt="Logo Anime Cave"
        style={{ // Mantengo 'style' aquí por simplicidad al usar props como 'src' que no están en 'sx'
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: `6px solid ${theme.palette.primary.main}`, // Usa el color primario del tema
          objectFit: 'cover',
          marginBottom: '40px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.7)',
        }}
      />
      <Typography
        variant="h1" // Usa la variante h1 de tipografía definida en el tema
        component="h1" // Renderiza como un h1 HTML semánticamente
        sx={{
          color: 'primary.main', // Usa el color primario del tema
          fontSize: '5.5em', // Sobrescribe el tamaño si es muy específico para esta página
          fontWeight: 'bold', // Asegura negrita, aunque ya esté en h1 theme
          marginBottom: '15px',
          letterSpacing: '3px',
          textShadow: `0 0 15px ${theme.palette.primary.main}4D`, // Usar el color primario del tema con opacidad
        }}
      >
        Anime Cave
      </Typography>
      <Typography
        variant="body1" // Usa una variante de texto estándar de MUI
        component="p" // Renderiza como un p HTML semánticamente
        sx={{
          fontSize: '1.5em',
          maxWidth: '700px',
          lineHeight: '1.7',
          color: 'text.secondary', // O un color de texto más claro si lo prefieres: 'text.primary'
        }}
      >
        Explora y encuentra tu próximo anime favorito desde la comodidad de tu
        navegador.
      </Typography>
    </Box>
  );
}

export default Home;