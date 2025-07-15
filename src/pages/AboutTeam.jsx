import { Box, Typography, Grid, Avatar, useTheme } from '@mui/material';

const teamMembers = [
  {
    id: 1,
    name: 'Ricardo Loyola',
    role: 'Diseño (Figma) y Código',
    avatar: '/richi.jpg',
  },
  {
    id: 2,
    name: 'Mauricio Henriquez',
    role: 'Diseño (FIGMA) y Presentación',
    avatar: '/mauri.jpeg',
  },
  {
    id: 3,
    name: 'Jose Alvarez',
    role: 'Diseño (FIGMA) y Presentación',
    avatar: '/jose.jpeg',
  },
  {
    id: 4,
    name: 'Sebastian Quinzacaras',
    role: 'Prototipos y Código',
    avatar: '/seba.jpeg',
  },
];

function AboutTeam() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: 'auto',
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
        variant="h1"
        component="h1"
        sx={{
          color: 'primary.main',
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '50px',
        }}
      >
        Nuestro Equipo
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 60px auto',
          lineHeight: '1.6',
          color: 'text.secondary',
        }}
      >
        Este proyecto fue desarrollado por los siguientes estudiantes como parte
        de un desafio:
      </Typography>

      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          paddingBottom: '40px',
        }}
      >
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
            <Box
              sx={{
                backgroundColor: 'background.default',
                padding: '25px',
                borderRadius: '12px',
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
                height: '100%',
              }}
            >
              <Avatar
                alt={member.name}
                src={member.avatar || '/default-placeholder-avatar.png'}
                sx={{
                  width: 120,
                  height: 120,
                  marginBottom: '20px',
                  border: `3px solid ${theme.palette.primary.main}`,
                }}
              />
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  color: 'text.primary',
                  fontSize: '1.6rem',
                  marginBottom: '8px',
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
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