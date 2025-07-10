import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Importaciones de Material-UI ---
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel, // Para etiquetas si las necesitas
  CircularProgress,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Grid,
  useTheme, // Para acceder al tema
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Icono de lupa

function AnimeList() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [hasSearched, setHasSearched] = useState(false);
  // initialLoad ya no es tan necesario con la refactorización de los estilos de MUI

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const navigate = useNavigate();
  const theme = useTheme(); // Acceder al tema

  const animeTypes = ['tv', 'movie', 'ova', 'special', 'ona', 'music'];

  // Cargar géneros al montar el componente
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/genres/anime');
        if (!res.ok) throw new Error('Error al cargar los géneros.');
        const data = await res.json();
        setGenres(data.data);
      } catch (err) {
        console.error('Error al obtener géneros:', err);
        setError('No se pudieron cargar las opciones de filtro.');
      }
    };
    fetchGenres();
  }, []);

  const searchAnime = async (e) => {
    if (e) e.preventDefault();

    if (!query && !selectedGenre && !selectedType) {
      setError('Por favor, ingresa un término de búsqueda o selecciona un filtro.');
      setResults([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    let apiUrl = `https://api.jikan.moe/v4/anime?limit=24`;

    if (query) {
      apiUrl += `&q=${query}`;
    }
    if (selectedGenre) {
      apiUrl += `&genres=${selectedGenre}`;
    }
    if (selectedType) {
      apiUrl += `&type=${selectedType}`;
    }

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('No se encontraron animes con esos criterios.');
        }
        throw new Error(`Error HTTP: ${res.status}`);
      }
      const data = await res.json();
      setResults(data.data || []);
      setHasSearched(true);
    } catch (err) {
      console.error('Error al buscar animes:', err);
      setError(err.message || 'Error al buscar animes.');
      setResults([]);
      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedGenre('');
    setSelectedType('');
    setResults([]);
    setError(null);
    setHasSearched(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default', // Usar el color de fondo del tema
        color: 'text.primary',
        minHeight: 'auto',
        padding: '40px 20px',
        paddingBottom: '60px',
        textAlign: 'center',
        fontFamily: theme.typography.fontFamily,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:
          !hasSearched && !loading && results.length === 0 ? 'center' : 'flex-start',
        height:
          !hasSearched && !loading && results.length === 0
            ? 'calc(100vh - 100px)'
            : 'auto',
        transition: 'all 0.7s ease-in-out',
      }}
    >
      <Typography
        variant="h1" // Usa la variante h1 de tipografía
        component="h1" // Renderiza como h1 HTML
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          transition: 'all 0.7s ease-in-out',
          fontSize: hasSearched ? '2.5rem' : '3.5rem', // Usar 'rem' con MUI
          marginBottom: hasSearched ? '20px' : '30px',
        }}
      >
        Buscar Animes
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '20px',
          boxSizing: 'border-box',
          transition: 'all 0.7s ease-in-out',
          marginTop: hasSearched ? '0px' : 'calc(30vh - 150px)',
          marginBottom: hasSearched ? '20px' : '40px',
        }}
      >
        <Box
          component="form" // El formulario como un Box
          onSubmit={searchAnime}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <TextField
            fullWidth // Ocupa todo el ancho disponible
            label="Escribe un anime..." // Placeholder ahora es label
            variant="outlined" // Estilo de borde
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputLabelProps={{
              sx: { color: theme.palette.text.secondary }, // Color del label
            }}
            sx={{
              marginRight: '15px',
              // Los demás estilos de border/background/color ya están en theme.components.MuiOutlinedInput
            }}
          />
          <IconButton
            type="submit"
            aria-label="buscar"
            sx={{
              padding: '12px', // Ajustado para un IconButton
              backgroundColor: 'primary.main',
              color: 'white',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark, // Color más oscuro en hover
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Sección de Filtros */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {/* Dropdown de Géneros */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel sx={{ color: theme.palette.text.secondary }}>Género</InputLabel>
            <Select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              label="Género" // Debe coincidir con InputLabel
            >
              <MenuItem value="">Todos los géneros</MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre.mal_id} value={genre.mal_id}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Dropdown de Tipos */}
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel sx={{ color: theme.palette.text.secondary }}>Tipo</InputLabel>
            <Select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              label="Tipo"
            >
              <MenuItem value="">Todos los tipos</MenuItem>
              {animeTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained" // Botón con fondo
            onClick={searchAnime}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Aplicar Filtros
          </Button>

          <Button
            variant="outlined" // Botón con borde
            onClick={clearFilters}
            sx={{
              color: theme.palette.text.primary, // Color del texto del botón
              borderColor: 'rgba(255, 255, 255, 0.3)', // Un gris claro para el borde
              '&:hover': {
                borderColor: theme.palette.text.primary, // Borde más blanco en hover
                backgroundColor: 'rgba(255, 255, 255, 0.08)', // Fondo sutil en hover
              },
            }}
          >
            Limpiar Filtros
          </Button>
        </Box>
      </Box>
      {/* Fin del contenedor de búsqueda y filtros */}

      {/* Indicador de Carga/Error/Mensajes */}
      {loading && (
        <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
          <CircularProgress sx={{ color: 'primary.main' }} />
          <Typography variant="body1" sx={{ color: 'primary.main', mt: 2 }}>
            Cargando animes...
          </Typography>
        </Box>
      )}
      {error && !loading && (
        <Typography variant="body1" sx={{ marginTop: '30px', color: 'error.main' }}>
          {error}
        </Typography>
      )}

      {!loading && !error && results.length === 0 && hasSearched && (
        <Typography variant="body1" sx={{ marginTop: '50px', color: 'text.secondary' }}>
          No se encontraron resultados para tu búsqueda. Intenta con otros
          filtros o palabras clave.
        </Typography>
      )}
      {!loading && !error && results.length === 0 && !hasSearched && (
        <Typography variant="body1" sx={{ marginTop: '50px', color: 'text.secondary' }}>
          Ingresa un anime o selecciona un filtro para empezar...
        </Typography>
      )}

      {/* Cuadrícula de Animes */}
      {results.length > 0 && (
        <Grid
          container // Es un contenedor de grid
          spacing={4} // Espacio entre items del grid (24px por defecto si spacing=3)
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingBottom: '40px',
            opacity: hasSearched ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out',
            marginTop: '20px',
          }}
        >
          {results.map((anime) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={anime.mal_id}>
              <Card
                sx={{
                  backgroundColor: 'background.default', // Fondo negro de la tarjeta
                  borderRadius: '10px',
                  border: `2px solid ${theme.palette.primary.main}`, // Borde rosa
                  boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
                onClick={() => navigate(`/anime/${anime.mal_id}`)}
              >
                <CardMedia
                  component="img"
                  image={anime.images.jpg.image_url}
                  alt={anime.title}
                  sx={{
                    width: '100%',
                    height: 'auto', // Ojo con el aspectRatio si lo quieres fijo
                    borderRadius: '6px',
                    marginBottom: '15px',
                    border: `1px solid ${theme.palette.primary.main}`, // Borde rosa en imagen
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    width: '100%',
                    textAlign: 'center', // Centrar el texto en la tarjeta
                    padding: '10px 15px', // Ajustar padding interno de CardContent
                    '&:last-child': { // Elimina el padding extra que MUI añade al último hijo de CardContent
                      paddingBottom: '10px',
                    }
                  }}
                >
                  <Typography
                    variant="h6" // Variantes de tipografía más pequeñas para tarjetas
                    component="h3"
                    sx={{
                      color: 'primary.main',
                      fontSize: '1.2em',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      marginBottom: '5px',
                    }}
                  >
                    {anime.title}
                  </Typography>
                  {anime.score && (
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9em' }}>
                      ⭐ {anime.score.toFixed(2)}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default AnimeList;