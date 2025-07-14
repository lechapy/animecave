// src/components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

// --- Importaciones de Material-UI ---
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material';

// --- Definición del tema personalizado de Material-UI ---
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#4fc3f7',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#aaa',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          padding: '10px 20px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          backgroundColor: '#1a1a1a',
          color: '#f0f0f0',
          // Estilos para el borde del Select y cómo interactúa
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Borde rosa por defecto
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Borde rosa en hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Borde rosa al enfocar
          },
          // Para el icono de la flecha del select
          '& .MuiSvgIcon-root': {
            color: '#ff4081', // Color rosa para la flecha
          },
        },
      },
    },
    MuiInputBase: {
      // Estilos para la base de todos los inputs (incluye TextField y Select)
      styleOverrides: {
        input: {
          color: '#f0f0f0', // Color del texto del input
        },
      },
    },
    MuiOutlinedInput: {
      // Estilos para los TextField con variant="outlined"
      styleOverrides: {
        root: {
          borderRadius: '6px',
          // Estilos para el borde del Outlined Input
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Borde rosa por defecto
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Mantiene el borde rosa en hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Borde rosa al enfocar
          },
          backgroundColor: '#1a1a1a', // Fondo para los inputs
        },
      },
    },
  },
});

export default function Layout() {
  useScrollToTop();

  const links = [
    { to: '/animes', label: 'Animes' },
    { to: '/api-info', label: 'Sobre la API' },
    { to: '/equipo', label: 'Nuestro equipo' },
    { to: '/anexas', label: 'Páginas Anexas' },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          width: '100vw',
          minHeight: '100vh',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <AppBar position="sticky">
          <Toolbar
            sx={{
              justifyContent: 'center',
              gap: '25px',
            }}
          >
            <Button
              component={NavLink}
              to="/"
              sx={{
                '&.active': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
                color: 'text.primary',
              }}
            >
              Inicio
            </Button>
            {links.map(({ to, label }) => (
              <Button
                key={to}
                component={NavLink}
                to={to}
                sx={{
                  '&.active': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                  color: 'text.primary',
                }}
              >
                  {label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: 'background.default',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}