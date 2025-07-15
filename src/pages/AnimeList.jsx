import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Grid,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function AnimeList() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const navigate = useNavigate();
  const theme = useTheme();

  const animeTypes = ['tv', 'movie', 'ova', 'special', 'ona', 'music'];
  const debouncedQuery = useDebounce(query, 500);

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

  useEffect(() => {
    if (debouncedQuery !== '' || selectedGenre !== '' || selectedType !== '') {
      searchAnimeAutomatically();
    } else if (
      debouncedQuery === '' &&
      selectedGenre === '' &&
      selectedType === ''
    ) {
      setResults([]);
      setError(null);
      setHasSearched(false);
      setLoading(false);
    }
  }, [debouncedQuery, selectedGenre, selectedType]);

  const searchAnimeAutomatically = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    let apiUrl = `https://api.jikan.moe/v4/anime?limit=24`;

    if (debouncedQuery) {
      apiUrl += `&q=${debouncedQuery}`;
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
        backgroundColor: 'background.default',
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
        variant="h1"
        component="h1"
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          transition: 'all 0.7s ease-in-out',
          fontSize: hasSearched ? '2.5rem' : '3.5rem',
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
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <TextField
            fullWidth
            label="Escribe un anime..."
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            InputLabelProps={{
              sx: { color: theme.palette.text.secondary },
            }}
            sx={{
              marginRight: '15px',
            }}
          />
          <IconButton
            onClick={searchAnimeAutomatically}
            aria-label="buscar"
            sx={{
              padding: '12px',
              backgroundColor: 'primary.main',
              color: 'white',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel sx={{ color: theme.palette.text.secondary }}>
                Género
              </InputLabel>
              <Select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                label="Género"
              >
                <MenuItem value="">Todos los géneros</MenuItem>
                {genres.map((genre) => (
                  <MenuItem key={genre.mal_id} value={genre.mal_id}>
                    {genre.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: theme.palette.text.secondary }}>
                Tipo
              </InputLabel>
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
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={searchAnimeAutomatically}
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
              variant="outlined"
              onClick={clearFilters}
              sx={{
                color: theme.palette.text.primary,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  borderColor: theme.palette.text.primary,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              Limpiar Filtros
            </Button>
          </Box>
        </Box>
      </Box>

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
        <Typography
          variant="body1"
          sx={{ marginTop: '50px', color: 'text.secondary' }}
        >
          No se encontraron resultados para tu búsqueda. Intenta con otros
          filtros o palabras clave.
        </Typography>
      )}
      {!loading && !error && results.length === 0 && !hasSearched && (
        <Typography
          variant="body1"
          sx={{ marginTop: '50px', color: 'text.secondary' }}
        >
          Ingresa un anime o selecciona un filtro para empezar...
        </Typography>
      )}

      {results.length > 0 && (
        <Grid
          container
          spacing={4}
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
                  backgroundColor: 'background.default',
                  borderRadius: '10px',
                  border: `2px solid ${theme.palette.primary.main}`,
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
                    height: '280px',
                    objectFit: 'contain',
                    borderRadius: '6px',
                    marginBottom: '15px',
                    border: `1px solid ${theme.palette.primary.main}`,
                  }}
                />
                <CardContent
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '10px 15px',
                    '&:last-child': {
                      paddingBottom: '10px',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
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
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', fontSize: '0.9em' }}
                    >
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