// src/components/Layout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop'; // Importa el hook aquí

// --- Importaciones de Material-UI ---
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  CssBaseline, // Para aplicar estilos base consistentes
  createTheme,
  ThemeProvider,
} from '@mui/material';

// --- Definición del tema personalizado de Material-UI ---
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Modo oscuro
    primary: {
      main: '#ff4081', // Tu rosa vibrante para el color primario
    },
    secondary: {
      main: '#4fc3f7', // Un azul claro si lo necesitas para enlaces, etc.
    },
    background: {
      default: '#000000', // Fondo negro puro para la página
      paper: '#1a1a1a', // Fondo para tarjetas, dialogos, etc. (un gris muy oscuro)
    },
    text: {
      primary: '#f0f0f0', // Texto principal blanco/gris claro
      secondary: '#aaa', // Texto secundario
    },
  },
  typography: {
    fontFamily: 'Segoe UI, sans-serif', // Tu fuente preferida
    h1: {
      fontSize: '3.5rem', // Ajusta según el tamaño de tu h1 en Home
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    // Puedes definir más variantes de tipografía aquí
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000', // Fondo negro puro para el AppBar
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)', // Sombra para el AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Bordes redondeados para todos los botones
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          padding: '10px 20px', // Padding base para los botones
        },
      },
    },
    // Puedes añadir overrides para otros componentes aquí, por ejemplo para los selects y inputs
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          border: '2px solid #ff4081', // Borde rosa para selects
          backgroundColor: '#1a1a1a',
          color: '#f0f0f0',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Oculta el borde por defecto de MUI
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff4081', // Borde rosa al enfocar
          },
        },
      },
    },
    MuiInputBase: { // Para el input de texto y selects, si lo vas a usar
        styleOverrides: {
            input: {
                color: '#f0f0f0', // Color del texto del input
            },
        },
    },
    MuiOutlinedInput: { // Para los bordes del input de texto y selects
      styleOverrides: {
        root: {
          borderRadius: '6px',
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
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Aplica estilos base CSS reseteados */}
      <Box
        sx={{
          backgroundColor: 'background.default', // Usa el color de fondo definido en el tema
          color: 'text.primary', // Usa el color de texto principal definido en el tema
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
              justifyContent: 'center', // Centrar los botones en la barra
              gap: '25px', // Espacio entre los botones
            }}
          >
            <Button
              component={NavLink} // Usar NavLink de react-router-dom
              to="/"
              sx={{
                '&.active': {
                  backgroundColor: 'primary.main', // Color primario del tema
                  color: 'white',
                },
                color: 'text.primary', // Color del texto del botón inactivo
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
            backgroundColor: 'background.default', // Usaremos el fondo general,
                                                 // y cada página definirá su propio contraste
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}