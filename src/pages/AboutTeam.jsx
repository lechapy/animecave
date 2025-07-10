// Importaciones de Material-UI
import {
  Box,
  Typography,
  Grid,
  Avatar, // Para los avatares de los miembros del equipo
  useTheme, // Para acceder al tema
} from '@mui/material';

// Podemos definir los miembros del equipo como un array de objetos
const teamMembers = [
  {
    id: 1,
    name: 'Ricardo Loyola',
    role: 'Diseño y Código',
    avatar: '/placeholder-avatar.png', // Asegúrate de que esta imagen exista en tu carpeta public/
  },
  {
    id: 2,
    name: 'Mauricio Henriquez',
    role: 'Descripcion de rol',
    avatar: '/placeholder-avatar.png',
  },
  {
    id: 3,
    name: 'Jose Alvarez',
    role: 'Descripcion de rol',
    avatar: '/placeholder-avatar.png',
  },
  {
    id: 4,
    name: 'Sebastian Quinzacaras',
    role: 'Código',
    avatar: '/placeholder-avatar.png',
  },
];

function AboutTeam() {
  const theme = useTheme(); // Acceder al tema

  return (
    <Box
      sx={{
        backgroundColor: 'background.default', // Fondo negro del tema
        color: 'text.primary', // Color de texto principal del tema
        minHeight: 'auto', // La altura se ajusta al contenido
        padding: '60px 20px',
        paddingBottom: '60px',
        fontFamily: theme.typography.fontFamily,
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centrar el contenido general
      }}
    >
      <Typography
        variant="h1" // Usa la variante h1 del tema
        component="h1" // Renderiza como h1 HTML
        sx={{
          color: 'primary.main', // Color rosa del tema
          fontSize: '3.5rem', // Usar 'rem'
          fontWeight: 'bold',
          marginBottom: '50px',
        }}
      >
        Nuestro Equipo
      </Typography>

      {/* Descripción del proyecto */}
      <Typography
        variant="body1" // Variantes de tipografía para párrafos
        component="p"
        sx={{
          fontSize: '1.1rem', // Usar 'rem'
          maxWidth: '800px',
          margin: '0 auto 60px auto',
          lineHeight: '1.6',
          color: 'text.secondary', // Color de texto secundario del tema
        }}
      >
        Este proyecto fue desarrollado por Sebastián como parte de un desafío
        técnico y creativo. El objetivo fue construir una aplicación web
        interactiva usando React y la API pública de Jikan.
      </Typography>

      {/* Contenedor de los miembros del equipo usando Grid */}
      <Grid
        container // Contenedor de Grid
        spacing={5} // Espacio entre items del grid (40px)
        justifyContent="center" // Centrar los items del grid
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto', // Centrar el grid de tarjetas
          paddingBottom: '40px',
        }}
      >
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
            <Box
              sx={{
                backgroundColor: 'background.default', // Fondo negro del tema para la tarjeta
                padding: '25px',
                borderRadius: '12px',
                border: `2px solid ${theme.palette.primary.main}`, // Borde rosa del tema
                boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
                height: '100%', // Asegura que todas las tarjetas tengan la misma altura en la fila
              }}
            >
              <Avatar
                alt={member.name}
                src={member.avatar || '/default-placeholder-avatar.png'} // Usar avatar del miembro o un default
                sx={{
                  width: 120, // Usar directamente los píxeles para Avatar
                  height: 120,
                  marginBottom: '20px',
                  border: `3px solid ${theme.palette.primary.main}`, // Borde rosa del tema
                }}
              />
              <Typography
                variant="h5" // Variante de tipografía para nombres (más grande que p)
                component="h3" // Renderiza como h3 HTML
                sx={{
                  color: 'text.primary', // Color blanco del tema
                  fontSize: '1.6rem', // Usar 'rem'
                  marginBottom: '8px',
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body1" // Variante para el rol
                component="p" // Renderiza como p HTML
                sx={{
                  color: 'text.secondary', // Color gris claro del tema
                  fontSize: '1.1rem', // Usar 'rem'
                }}
              >
                {member.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutTeam;