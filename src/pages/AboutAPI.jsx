import { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AboutAPI() {
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
        justifyContent: 'flex-start',
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
        Usamos Jikan API
      </Typography>

      <Box
        sx={{
          maxWidth: '800px',
          textAlign: 'left',
          lineHeight: '1.7',
          color: 'text.secondary',
          marginBottom: '40px',
        }}
      >
        <Typography variant="body1" component="p" sx={{ marginBottom: '15px' }}>
          En Anime Cave, potenciamos nuestra plataforma con{' '}
          <Typography component="strong" sx={{ color: 'primary.main' }}>
            Jikan API
          </Typography>
          , una herramienta no oficial que accede a los datos de MyAnimeList.
          Esta API nos permite ofrecerte información actualizada sobre anime y
          manga, como títulos, sinopsis y más, de forma rápida y eficiente.
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '15px' }}>
          ¡Explora y disfruta de un contenido enriquecido gracias a esta
          tecnología!
        </Typography>
        <Typography variant="body1" component="p">
          Más información en:{' '}
          <Link
            href="https://jikan.moe/"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'secondary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            https://jikan.moe/
          </Link>
        </Typography>
      </Box>

      <Box
        component="img"
        src="https://i.imgur.com/ccx3pxo.png"
        alt="Logo Jikan API"
        sx={{
          maxWidth: '400px',
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
          border: `3px solid ${theme.palette.primary.main}`,
          marginBottom: '60px',
        }}
      />

      <Box
        sx={{
          width: '100%',
          maxWidth: '800px',
          textAlign: 'left',
        }}
      >
        <Accordion
          sx={{
            marginBottom: '10px',
            backgroundColor: 'background.paper',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            '&.Mui-expanded': {
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.primary',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&.Mui-expanded': {
                borderBottom: `1px solid ${theme.palette.primary.main}`,
              },
              minHeight: '48px !important',
            }}
          >
            <Typography variant="h6" component="span" sx={{ fontSize: '1.2rem' }}>
              ¿Qué datos ofrece Jikan API?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: '1.6' }}
            >
              Jikan API proporciona un amplio conjunto de datos de MyAnimeList,
              incluyendo:
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Información de Animes:
                    </Typography>{' '}
                    Títulos, sinopsis, imágenes, puntuaciones, episodios,
                    géneros, estudios, etc.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Información de Mangas:
                    </Typography>{' '}
                    Títulos, sinopsis, imágenes, volúmenes, géneros, autores,
                    etc.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Personajes y Staff.
                    </Typography>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Noticias, foros y estadísticas.
                    </Typography>
                  </Typography>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: '10px',
            backgroundColor: 'background.paper',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            '&.Mui-expanded': {
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.primary',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&.Mui-expanded': {
                borderBottom: `1px solid ${theme.palette.primary.main}`,
              },
              minHeight: '48px !important',
            }}
          >
            <Typography variant="h6" component="span" sx={{ fontSize: '1.2rem' }}>
              ¿Por qué usamos Jikan API en Anime Cave?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: '1.6' }}
            >
              Elegimos Jikan API por varias razones clave:
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Acceso Gratuito:
                    </Typography>{' '}
                    Es una API pública y gratuita, ideal para proyectos
                    educativos y de hobby.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Riqueza de Datos:
                    </Typography>{' '}
                    Ofrece una vasta cantidad de información actualizada
                    directamente de MyAnimeList.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Facilidad de Uso:
                    </Typography>{' '}
                    Su documentación es clara y fácil de entender, lo que
                    agiliza el desarrollo.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Comunidad Activa:
                    </Typography>{' '}
                    Cuenta con una comunidad de desarrolladores activa que
                    contribuye a su mejora continua.
                  </Typography>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: '10px',
            backgroundColor: 'background.paper',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            '&.Mui-expanded': {
              border: `1px solid ${theme.palette.primary.main}`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: 'primary.main', fontSize: '2rem' }} />
            }
            aria-controls="panel3a-content"
            id="panel3a-header"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.primary',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&.Mui-expanded': {
                borderBottom: `1px solid ${theme.palette.primary.main}`,
              },
              minHeight: '48px !important',
            }}
          >
            <Typography variant="h6" component="span" sx={{ fontSize: '1.2rem' }}>
              Consideraciones Técnicas (Desarrolladores)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: '1.6' }}
            >
              Para desarrolladores interesados, Jikan API es una API RESTful que
              responde en formato JSON.
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Rate Limits:
                    </Typography>{' '}
                    Es importante respetar los límites de solicitudes para no ser
                    bloqueado (generalmente 30 solicitudes/minuto).
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Versión V4:
                    </Typography>{' '}
                    Estamos utilizando la versión 4, que es la más reciente y
                    estable.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" component="span">
                    <Typography component="strong" sx={{ color: 'primary.main' }}>
                      Documentación:
                    </Typography>{' '}
                    Puedes encontrar la documentación completa en{' '}
                    <Link
                      href="https://docs.api.jikan.moe/"
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        color: 'secondary.main',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      docs.api.jikan.moe
                    </Link>
                    .
                  </Typography>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default AboutAPI;